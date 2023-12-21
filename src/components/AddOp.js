import React, { useState } from 'react'
import SpringbootService from '../services/SpringbootService';

export default function AddOp(props) {

    const [name, setName] = useState('');
    const [exp, setExp] = useState('');
    const [msg,setMsg] = useState(0);

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeExp = (event) => {
        setExp(event.target.value);
    }
    const onCancel = () => {
        props.onCancel(1);
    }
    const onContinue = () => {
        SpringbootService.addOperation(name,exp).then(data=>setMsg(data));
        alert(`Adding ${name} with expression ${exp}`);
    }
    return (
    <>
        <div className="container addOp my-3">
            <h2>
                Add Mathematical Operation
                <small className="text-body-secondary"> You May Also Add Custom Operations</small>
            </h2>
            <div className="container my-3">
                {
                    !name || !exp?
                        <div className="alert alert-warning" role="alert">
                            Enter both the Name and Expression that better defines the operation.
                        </div>:
                    msg==1?
                        <div className="alert alert-success" role="alert">
                            Operation added successfully.
                        </div>:
                    msg==-1?
                        <div className="alert alert-danger" role="alert">
                            Something went wrong! Please try again later.
                        </div>:
                    <p></p>
                }
            </div>
            <div className="container my-3">
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputName" className="col-form-label">Operation Name</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="inputName" onChange={onChangeName} className="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                        e.g. Addition
                        </span>
                    </div>
                </div>
                <div className="row g-3 align-items-center my-3">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Define Expression</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="inputPassword6" onChange={onChangeExp} className="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                        e.g a+b or A+B
                        </span>
                    </div>
                </div>
            </div>
            <div className='container my-3 d-flex'>
                <button className="btn btn-primary mx-3" onClick={onContinue}>Continue</button>
                <button className="btn btn-danger mx-3" onClick={onCancel}>Cancel</button>
            </div>
            
        </div>
    </>);
}