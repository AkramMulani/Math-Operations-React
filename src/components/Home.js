import React, { useEffect, useState } from 'react'
import '../App.css'
import evaluateExpression from '../service/ExpressionEvaluator';
import ConnectionService from '../service/ConnectionService';

export default function Home(props) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState('0');
    const [expression, setExression] = useState('');
    const [time, setTime] = useState('---');

    const changeNum1 = (num) => {setNum1(num);}
    const changeNum2 = (num) => {setNum2(num);}

    const evaluate = () => {
        const data = {'a':num1,'b':num2};
        const res = evaluateExpression(expression,data);
        setResult(res);
    }

    useEffect(()=>{
        ConnectionService.getExpression(props.selected_operation).then(response=>{
            const d = response.split('\t');
            setExression(d[0]);
            setTime(d[1]);
        });
    })

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
                <div className='left'>
                    <div className="mb-3 row">
                        <label htmlFor="inputnumber1" className="col-sm-2 col-form-label">Number 1:</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputnumber1" onChange={(e)=>changeNum1(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputnumber2" className="col-sm-2 col-form-label">Number 2:</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputnumber2" onChange={(e)=>changeNum2(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="mb-3 row">
                        <label htmlFor="result" className="col-sm-2 col-form-label">Result:</label>
                        <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="result" value={result}/>
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