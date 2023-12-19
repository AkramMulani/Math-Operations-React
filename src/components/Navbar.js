import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import SpringbootService from '../services/SpringbootService';

export default function Navbar(props) {

    const [operations, setOperations] = useState(['No Operation']);
    const [selectedOperation, setSelectedOperation] = useState('Not selected'); // Initial text for the button

      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await SpringbootService.getOperationsNames();
            setOperations(data);
            // console.log(operations);
            setSelectedOperation(operations[0]);
          } catch (error) {
            console.error(error.message);
          }
        };
    
        fetchData();
      }, []);

    const handleOperationSelect = (operation) => {
        props.onOperationSelect(operation);
        setSelectedOperation(operation);
      };

      const handleItemClick = (operation) => {
        if (operation === 'Add') {
          const name = window.prompt('Enter operation Name');
          const exp = window.prompt('Define expression');
          if (name==null && exp==null) {console.log('discarded');}
          else {let i = SpringbootService.addOperation(name,exp);
          if (i!=-1) {console.log(name+' added successfully');window.location.reload();}}
        } else if (operation === 'Delete') {
          const name = window.prompt('Enter name of operation to delete');
          if (name==null) {console.log('discarded');}
          else{const i = SpringbootService.deleteOperation(name);
          if (i!=-1) {console.log(name+' deleted successfully');window.location.reload();}}
        }
      };

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Update
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Add')}>Add</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Delete')}>Delete</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedOperation}
                    </a>
                    <ul className="dropdown-menu operations">
                        {/* Operations fetched from springboot api */}
                        {operations.map((operation, index) => (
                            <li key={index}><a className='dropdown-item' href='#' onClick={() => handleOperationSelect(operation)}>{operation}</a></li>
                        ))}
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    selected_operation: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Math Operations",
    selected_operation: "No operation present",
}