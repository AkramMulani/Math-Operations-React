import React, { useEffect, useState } from 'react'
import ConnectionService from '../service/ConnectionService'

export default function Navbar(props) {

    const [operations, setOperations] = useState(['Operations not found']);
    
    const loadOperations = () => {
        ConnectionService.getOperationsNames().then(data=>{
            if(data.length>0) {
                setOperations(data);
                props.onload(false);
            }
        })
    }

    const handleOperationSelect = (name) => {
        props.onSelect(name);
    }

    const handleTabChange = (number) => {
        props.onTabSelect(number)
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {props.load?loadOperations():<p></p>}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={()=>handleTabChange(1)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={()=>handleTabChange(2)}>Add Operation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={()=>handleTabChange(3)}>Delete Operation</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {props.selected_operation}
                        </a>
                        <ul className="dropdown-menu">
                            {operations.map(operation=>(
                                <li key={operation}><a className="dropdown-item" href="#" onClick={()=>handleOperationSelect(operation)}>{operation}</a></li>
                            ))}
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#' onClick={()=>handleTabChange(4)}>Features</a>
                    </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                </div>
            </div>
        </nav>
        </>
    );
}