import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Components.css'



export default function NumberForm(props) {

    const [result,setResult] = useState('');
    const [expression,setExpression] = useState('');

    // Split the expression into literals based on spaces
    const literals = props.expression.match(/[a-zA-Z]+/g) || [];
    const uniqueLiterals = new Set(literals);
    // console.log(uniqueLiterals);
    const l1 = [...uniqueLiterals];
    // console.log(l1);

  // State to store input values corresponding to each literal
  const [inputValues, setInputValues] = useState({});

  // Function to handle input changes
  const handleInputChange = (index, value) => {
    setInputValues({
      ...inputValues,
      [index]: value.trim(), // Store input values with index as key
    });
  };

  // Function to replace literals with input values
  const replaceLiterals = () => {
    let replacedExpression = props.expression;
    Object.keys(inputValues).forEach(index => {
      const literal = literals[index];
      replacedExpression = replacedExpression.replace(new RegExp(literal, 'g'), inputValues[index]);
    });
    // console.log('Replaced Expression:', replacedExpression);
    return replacedExpression;
  };

    const handleBtnClick = (operation) => {
        if (operation==='eval'){
            // Evaluate
            let exp = replaceLiterals();
            fetchResult(exp);
        } else if (operation==='clr') {
            // Clear inputs
            window.location.reload();
        }
    }

    const fetchResult = (exp) => {
        const r = eval(exp);
        setResult(r);
      };

    return (
        <>
        <div className="container my-3 myforms">
        
            <div className="left">
                {/* Literal 1 */}
                <form>
                    {l1.map((literal, index) => (
                        <div key={index} className='row mb-3'>
                        <label htmlFor={`input_${index}`} className="col-sm-2 col-form-label">{`Literal ${literal}:`}</label>
                        <div className="col-sm-10"><input
                            className="form-control inp"
                            type="number"
                            id={`input_${index}`}
                            name={`input_${index}`}
                            value={inputValues[index] || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        /> </div>
                        </div>
                    ))}
                    
                </form>
            </div>
            <div className='right'>
                {/* Result */}
                <div className="row mb-3">
                    <label htmlFor="colFormLabel-l1" className="col-sm-2 col-form-label">Result:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" defaultValue={result} id="colFormLabel-l1" placeholder="Number" htmlType="number"/>
                    </div>
                </div>
                {/* Buttons */}
                <button type="button" className="btn btn-primary" onClick={()=>handleBtnClick('eval')}>Evaluate</button>
                <button type="button" className="btn btn-secondary" onClick={()=>handleBtnClick('clr')}>Clear</button>
            </div>

        </div>
        </>
    );
}

NumberForm.propTypes = {
    literal1: PropTypes.string.isRequired,
}

NumberForm.defaultProps = {
    literal1 : "x",
}