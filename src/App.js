// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import AddOperation from './components/AddOperation';
import DeleteOperation from './components/DeleteOperation';
import Features from './components/Features';
import Home1 from './components/Home1';

function App() {

  const [tab, setTab] = useState(1);
  const [selected_operation, setSelectedOperation] = useState('No operation selected');
  const [load, setLoad] = useState(true);

  const handleTabChange = (number) => {
    setTab(number);
  }

  return (
    <>
    <Navbar
      onTabSelect={handleTabChange}
      title={"Math Operations"} 
      selected_operation={selected_operation} 
      onSelect={setSelectedOperation}
      load={load}
      onload={setLoad}/>

    {
      // tab===1?<Home selected_operation={selected_operation} onload={setLoad}/>:
      tab===1?<Home1 selected_operation={selected_operation} onload={setLoad}/>:
      tab===2?<AddOperation changeTab={handleTabChange} onload={setLoad} load={load}/>:
      tab===3?<DeleteOperation setLoad={setLoad}/>:
      tab===4?<Features/>:
      <p></p>
    }
    
    </>
  );
}

export default App;
