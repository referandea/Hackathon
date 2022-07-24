import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';

function App() {
 
  return (
    
    <Router>
      <Routes>
        <Route path='/'  element={<Home  />} />
          <Route path='/dashboard/:rem' element={<Dashboard />}/>
        
      </Routes>
    </Router>
    
  );
}


export default App;
