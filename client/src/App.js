import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Registration from './Registration/regis';
import Disease from './Disease/disease';
import Schemes from './Schemes/schmes';
import Login from './Login/login';
import Home from './Home/home';

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;