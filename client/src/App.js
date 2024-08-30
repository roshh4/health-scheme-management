import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Registration from './Registration/regis';
import Login from './Login/login';
import Home from './Home/home';
import Disease from './doctors/doctors';
import Schemes from './Schemes/schmes';
import Admin from './Admin/admin';
import Pmsby from './Schemes/Central/Pmsby';
import Nacp from './Schemes/Central/Nacp';
import Pmjay from './Schemes/Central/Pmjay';
import Jsy from './Schemes/Central/Jsy';
import Indhra from './Schemes/Central/Indhra';
import Pmjjby from './Schemes/Central/Pmjjby';

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
          <Route path="schemes/central/pmjay" element={<Pmjay />} />
          <Route path="schemes/central/pmsby" element={<Pmsby />} />
          <Route path="schemes/central/nacp" element={<Nacp />} />
          <Route path="schemes/central/jsy" element={<Jsy />} />
          <Route path="schemes/central/indhra" element={<Indhra />} />
          <Route path="schemes/central/pmjjby" element={<Pmjjby />} />

          

        </Route>
      </Routes>
    </Router>
  );
}

export default App;