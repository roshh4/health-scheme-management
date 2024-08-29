import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
    <div>
      <p>Login</p>
      <button onClick={handleRegisterClick}>Go to Registration</button>
      <button onClick={handleHomeClick}>Go to Home</button>
      <button onClick={handleAdminClick}>Go to Admin</button>
    </div>
  );
}

export default Login;
