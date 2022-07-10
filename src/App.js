
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.js";
import Home from "./Pages/Home.js";


const App = () => {
  
  
  

  return (
    <Router>
    <Routes>
    <Route exact  path="/"  element={<Home />} />
      <Route path="/dashboard/:rer"  element={<Dashboard />} />
      
    </Routes>
    </Router>
  );
};
export default App;