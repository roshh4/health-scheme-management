import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Registration from './Registration/regis';
import Login from './Login/login';
import Home from './Home/home';
import Disease from './Disease/disease';
import Schemes from './Schemes/schmes';
import Admin from './Admin/admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/home" element={<Home />}>
          <Route path="disease" element={<Disease />} />
          <Route path="schemes" element={<Schemes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
