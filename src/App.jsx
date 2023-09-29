import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components from react-router-dom
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
  
  );
}

export default App;