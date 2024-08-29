import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registration");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleAdminClick = () => {
    navigate("/admin");
  };


  return (
    <div className="login-container">
      <img src="logo.png" alt="Your Logo" />
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">SUBMIT
        </button>
      </form>
      <p>Forgot your password?</p>
      <p>Don't have an account? <a onClick={handleRegisterClick}>Register</a></p>
      <button onClick={handleHomeClick}>Go to Home</button>
      <button onClick={handleAdminClick}>Go to Admin</button>
    </div>
  );
}

export default Login;