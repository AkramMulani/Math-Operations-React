import React, { useEffect, useState } from 'react'
import '../App.css'
import evaluateExpression from '../service/ExpressionEvaluator';
import ConnectionService from '../service/ConnectionService';

export default function Home1(props) {
    const [numbers, setNumbers] = useState([]);
    const [variables, setVariables] = useState([]);
    const [result, setResult] = useState('0');
    const [expression, setExpression] = useState('');
    const [time, setTime] = useState('---');

    const updateNumber = (index, value) => {
        const updatedNumbers = [...numbers];
        updatedNumbers[index] = value;
        setNumbers(updatedNumbers);
    };

    const evaluate = () => {
        const data = {};

        if (variables && variables.length > 0) {
            variables.forEach((variable, index) => {
                data[variable] = numbers[index];
            });
        }
    
        const res = evaluateExpression(expression, data);
        setResult(res);
    };
    

    useEffect(() => {
        ConnectionService.getExpression(props.selected_operation).then(response => {
            const [exp, timestamp] = response.split('\t');
            setExpression(exp);
            setTime(timestamp);
            try {
                setVariables(exp.match(/[a-zA-Z]+/g));
                setNumbers(new Array(variables.length).fill(0));
            } catch(err) {
                setNumbers([]);
            }
        });
    }, [props.selected_operation]);

    return (
        <div className='container my-3'>
            {props.onload(false)}
            <div className='header'>
                <h5>
                    Operation: {expression}
                    <small className='mx-3 text-body-secondary'>Date: {time}</small>
                </h5>
            </div>
            <div className='body my-3'>
                <div className='inputs left'>
                    {variables?variables.map((variable, index) => (
                        <div className="mb-3 row" key={`inputnumber${index}`}>
                            <label htmlFor={`inputnumber${index}`} className="col-sm-2 col-form-label">
                                Var {variable}:
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`inputnumber${index}`}
                                    value={numbers[index]}
                                    onChange={(e) => updateNumber(index, e.target.value)}
                                />
                            </div>
                        </div>
                    )):<p></p>}
                </div>
                <div className='result right'>
                    <div className="mb-3 row">
                        <label htmlFor="result" className="col-sm-2 col-form-label">Result:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                readOnly
                                className="form-control-plaintext"
                                id="result"
                                value={result}
                            />
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type="button" className="btn btn-primary" onClick={evaluate}>Evaluate</button>
                        <button type="button" className="btn btn-secondary mx-3">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}