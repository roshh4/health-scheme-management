import React from "react";
import { Link, Outlet } from "react-router-dom";
import './home.css'; 

function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/home/disease">Doctors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/home/schemes">
           <select>
           <option>Schemes</option>
            <option>Central Schemes</option>
            <option>State Schemes</option>
            </select>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
