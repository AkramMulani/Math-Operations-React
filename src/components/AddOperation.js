import React, { useState } from 'react'
import ConnectionService from '../service/ConnectionService'

export default function AddOperation(props) {

    const [success, setSuccess] = useState(0);
    const [name, setName] = useState('');
    const [expression, setExpression] = useState('');

    const handelOnChange = (value,target) => {
        if(target==='name') {setName(value)}
        else {setExpression(value)}
    }

    const handleContinue = () => {
        ConnectionService.addOperation(name,expression).then(data=>{
            setSuccess(data);
            props.onload(true);
            console.log(data);
        })
    }

    const handleCancel = () => {
        props.changeTab(1);
    }

    return (
        <>
            <div className='container my-3'>
                <h4>
                    Add Mathematical Operations
                    <small className='mx-3 text-body-secondary'>You May Add Custom Operations</small>
                </h4>
                {success===0?
                    <div className='alert alert-warning'>
                        Enter both operation name and its behavioral expression.
                    </div>:
                 success===1?
                    <div className='alert alert-success'>
                        Operation is added successfully...
                    </div>:
                 success===-1?
                    <div className='alert alert-danger'>
                        Something went wrong! Please try again later...
                    </div>:
                    <p></p>}
                
                <div className="mb-3 my-3">
                    <label htmlFor="formGroupNameInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupNameInput" placeholder="Name of the operation" onChange={(e)=>handelOnChange(e.target.value,'name')}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExpressionInput" className="form-label">Expression</label>
                    <input type="text" className="form-control" id="formGroupExpressionInput" placeholder="e.g. a+b, a-b or a*b+c" onChange={(e)=>handelOnChange(e.target.value,'exp')}/>
                </div>

                <div className='my-3'>
                    <button className='btn btn-primary' onClick={handleContinue}>Continue</button>
                    <button className='btn btn-danger mx-3' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </>
    );
}