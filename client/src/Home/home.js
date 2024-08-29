import React from "react";
import { Link, Outlet } from "react-router-dom";
import './home.css'; 

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/home/disease">Disease</Link>
          </li>
          <li className="navbar-item">
            <Link to="/home/schemes">Schemes</Link>
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
