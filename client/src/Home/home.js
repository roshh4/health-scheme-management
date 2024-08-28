import React from "react";
import { Link } from "react-router-dom";
import './home.css'; 

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/disease">Disease</Link>
          </li>
          <li className="navbar-item">
            <Link to="/schemes">Schemes</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>Select an option from the navigation bar to explore.</p>
      </div>
    </div>
  );
}

export default Home;
