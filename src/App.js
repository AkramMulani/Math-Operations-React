// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';
import AddOp from './components/AddOp';
import DelOp from './components/DelOp';
import Features from './components/Features';

function App() {

  const [tab, setTab] = useState(1);

  const handleTabChange = (number) => {
    setTab(number);
  }

  return (
    <>
    <Navbar onTabSelect={handleTabChange} />
    {
      tab===1 ? <HomeTab />:
      tab===2 ? <AddOp onCancel={handleTabChange}/>:
      tab===3 ? <DelOp />:
      tab===4 ? <Features />:
      <p>Welcome to Math Operations</p>
    }
    </>
  );
}

export default App;
