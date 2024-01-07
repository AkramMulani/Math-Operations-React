import React, { useEffect, useState } from 'react'
import ConnectionService from '../service/ConnectionService'
import MathOperation from './MathOperation'
import '../App.css';

export default function DeleteOperation(props) {

    const [success, setSuccess] = useState(0);
    const [selected_operation, setSelectedOperation] = useState('');
    const [id, setId] = useState(-1);
    const [operations, setOperations] = useState([]);

    const onDelete = () => {
        ConnectionService.deleteOperation(id).then(data=>setSuccess(data));
        props.setLoad(true);
    }

    const onItemSelect = (i) => {
        operations.map(operation=>{
            if(operation.getId()===i) {setId(operation.getId());setSelectedOperation(operation.getName())}
        });
    }

    useEffect(()=>{
        ConnectionService.getOperations().then(data=>{
            if (data.length>0) {
                const op = data.map(operation=>{
                    return new MathOperation(operation.name,operation.expression).setId(operation.id).setTimestamp(operation.timestamp);
                });
                setOperations(op);
            }
        })
    })

    return (
        <>
            <div className='container my-3'>
                <div className='d-flex'>
                    <h4>
                        Delete Existing Operations
                        <small className='mx-3 text-body-secondary'>Select Operation And Delete</small>
                    </h4>
                    <button className='btn btn-danger mx-3' onClick={onDelete}>Delete</button>
                </div>
                
                {success===1?
                    <div className='alert alert-success'>
                        Operation deleted successfully...
                    </div>:
                 success===-1?
                    <div className='alert alert-danger'>
                        Something went wrong! Please try again later...
                    </div>:
                    <p></p>}

                {selected_operation?<p className='my-3'>Selected: {selected_operation}</p>:<p></p>}

                <div className="my-3">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Expression</th>
                            <th scope="col">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operations ?
                            operations.map((operation)=>(
                                <tr key={operation.getId()} className='tb-content-del' onClick={()=>onItemSelect(operation.getId())}>
                                    <th className='cell' scope='row'>{operation.getId()}</th>
                                    <td className='cell'>{operation.getName()}</td>
                                    <td className='cell'>{operation.getExpression()}</td>
                                    <td className='cell'>{operation.getTimestamp()}</td>
                                </tr>
                            )):
                            <tr><td colSpan={4}>
                                <div className="alert alert-warning my-3" role="alert">
                                    There are no operations added to application yet!
                                </div>
                            </td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}