import React, {useEffect, useState} from 'react'
import SpringbootService from '../services/SpringbootService';

export default function Navbar(props) {

  const [selected_operation,setSelectedOperation] = useState('Select Operation');
  const [data,setData] = useState([]);

  const handleTabSelect = (tab) => {
    props.onTabSelect(tab);
  }
  const handleOperationSelect = (name) => {
    setSelectedOperation(name);
  }

  useEffect(()=>{
    SpringbootService.getOperationsNames().then(d=>{
      if (d.length>0) {
        setData(d);
        setSelectedOperation(data[0]);
        console.log('data: ',d);
      }
      else {
        setData([]);
        setSelectedOperation('No Operation Found');
        console.log('No data');
      }
    });
  },[]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Math Operations</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={()=>handleTabSelect(1)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>handleTabSelect(2)}>Add Operations</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={()=>handleTabSelect(3)}>Delete Operations</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selected_operation}
              </a>
              <ul className="dropdown-menu">
                {data.map((name)=>(
                  <li key={name}><a className="dropdown-item" onClick={()=>handleOperationSelect(name)} href="#">{name}</a></li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={()=>handleTabSelect(4)}>Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
