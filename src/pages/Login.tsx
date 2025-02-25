import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login(username, password)) {
      setUsername("");  
      setPassword("");  
      navigate("/", { replace: true }); 
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login / Register</h2>
      <input 
        type="text" 
        value={username} 
        placeholder="Enter Username/Email"
        onChange={(e) => setUsername(e.target.value)} 
        autoComplete="off" 
/>

  <input 
      type="password" 
      value={password} 
      placeholder="Enter Password "
      onChange={(e) => setPassword(e.target.value)} 
      autoComplete="new-password" 
/>
      {error && <p className="error-message">{error}</p>}
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
