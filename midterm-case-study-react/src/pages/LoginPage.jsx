// React
import React, { useState } from "react";
// CSS style
import Style from "../css modules/loginpage.module.css";
// React router dom
import { useNavigate } from "react-router-dom";
// Axios
import axios from "../api/axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      const token = response.data.token;
      // Store the token in local storage or a cookie
      localStorage.setItem("token", token);
      setEmail("");
      setPassword("");
      navigate("/ViewProductPage", { replace: true });
    } catch (error) {
      console.log(error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className={Style.loginContainer}>
      <div className={Style.loginForm}>
        <h2 className={Style.header}>Login</h2> {}
        {error && <p className={Style.textDanger}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
