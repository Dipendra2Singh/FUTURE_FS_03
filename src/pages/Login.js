import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${username} (Demo only, no backend)`);
  };

  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Please log in to continue</p>
        <form className="auth-form" onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="auth-button" type="submit">
            Login
          </button>
        </form>
        <p className="auth-extra">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
