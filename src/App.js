// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';

function App() {

  const [selectedOperation, setSelectedOperation] = useState(null);

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
  };
  return (
    <>
    <Navbar onOperationSelect={handleOperationSelect}/>
    
    <HomeTab selectedOperation={selectedOperation}/>
    </>
  );
}

export default App;
