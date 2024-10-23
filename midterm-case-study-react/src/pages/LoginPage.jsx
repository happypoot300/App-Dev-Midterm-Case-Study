import React, { useState } from "react";
// CSS style
import Style from "../css modules/loginpage.module.css";
import { Container, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
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
      localStorage.setItem("token", token);
      setEmail("");
      setPassword("");
      navigate("/ViewProductPage");
    } catch (error) {
      console.log(error);
      setError("Invalid username or password");
    }
  };

  function handleRegister() {
    navigate("/registerPage");
  }

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
          <Container className="d-flex flex-column m-0 p-0">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
            <Button variant="link" onClick={handleRegister} className="mt-2">
              Register
            </Button>
          </Container>
        </form>
      </div>
    </div>
  );
}
