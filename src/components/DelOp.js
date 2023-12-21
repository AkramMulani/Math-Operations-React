import React, { useEffect, useState } from 'react'
import './Components.css'
import MathOperation from './MathOperation'
import SpringbootService from '../services/SpringbootService';

export default function DelOp() {

    const [operations, setOperations] = useState([]);
    const [selected_operation,setSelectedOperation] = useState('');
    const [selected_id,setSelectedId] = useState(0);
    const [del,setDel] = useState(0);


    const handleItemClick = (id) => {
        operations.map(operation=>{
            if (id===operation.getId()) {
                setSelectedOperation(operation.getName());
                setSelectedId(operation.getId());
            }
        })
    }
    const handleDelete = () => {
        SpringbootService.deleteOperation(selected_id).then(data=>setDel(data));
    }

    useEffect(()=>{
        SpringbootService.getOperations().then(data=>{
            if (data.length>0) {
                const list = data.map((operation,index)=>{
                    const op = new MathOperation(operation.name,operation.expression);
                    op.setId(operation.id);
                    op.setTimestamp(operation.timestamp);
                    return op;
                });
                setOperations(list);
            }
            else {
                setOperations(null);
            }
        });
    },[]);

    return (
    <>
        <div className="container delOp my-3">
            <h2 className='d-flex'>
                Delete Existing Operation
                <small className="text-body-secondary mx-3"> Just Select It From The List</small>
                <button className="btn btn-outline-danger mx-3" onClick={handleDelete} title='Select any operation and then click this button to delete operation'>Delete</button>
            </h2>
            <div>
                {
                    del==1?
                        <div className="alert alert-success" role="alert">
                            Operation deleted successfully: {selected_operation}.
                        </div>:
                    del==-1?
                        <div className="alert alert-danger" role="alert">
                            Something went wrong! Can't delete operation right now.
                        </div>:
                    selected_operation?<h5>Selected: {selected_operation}</h5>:<p></p>
                }
            </div>
            <div className="container my-3">
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
                            <tr key={operation.getId()} className='tb-content-del' onClick={()=>handleItemClick(operation.getId())}>
                                <th scope='row'>{operation.getId()}</th>
                                <td>{operation.getName()}</td>
                                <td>{operation.getExpression()}</td>
                                <td>{operation.getTimestamp()}</td>
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
    </>);
}