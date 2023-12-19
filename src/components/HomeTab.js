import React, { useState,useEffect } from 'react'
import NumberForm from './NumberForm';
import PropTypes from 'prop-types'
import SpringbootService from '../services/SpringbootService';


export default function HomeTab(props) {
    const [expression, setExpression] = useState('No operation selected');
    const [timestamp, setTimeStamp] = useState('');

    useEffect(() => {
      if (props.selectedOperation) {
        // Call ApiService to get expression when selectedOperation changes
        fetchExpression(props.selectedOperation);
      }
    }, [props.selectedOperation]);
  
    const fetchExpression = async (operation) => {
      try {
        const data = await SpringbootService.getExpression(operation);
        setExpression(data.split('\t')[0]);
        setTimeStamp(data.split('\t')[1]);
      } catch (error) {
        console.error(error.message);
      }
    };

    return (
        <>
        <div className="container main">
            <div className="expression my-3">
                <label htmlFor="selected-exp" className="selected-expression">Expression:</label>
                {props.selectedOperation ? (
                    <div className='exp'>
                        <p id='selected-exp'>{expression}</p> 
                        <label htmlFor='stamp' className='selected-expression'>Date:</label>
                        <p>{timestamp}</p>
                    </div>
                ) : (
                    <p>No operation selected yet</p>
                )}
            </div>
            <div className="myforms">
                <NumberForm expression={expression} />
            </div>
        </div>
        </>
    );
}

HomeTab.propTypes = {
    expression: PropTypes.string.isRequired,
}

HomeTab.defaultProps = {
    expression: "Not selected",
}