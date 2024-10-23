import React, { useState } from "react";
// CSS Style
import Style from "../css modules/loginpage.module.css";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // To disable button during login attempt
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error message on every attempt
    setError('');
    setLoading(true);

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

    setLoading(false); // Stop loading when done
  };

  function handleRegister() {
    navigate("/registerPage");
  }

  return (
    <div className={Style.loginContainer}>
      <div className={Style.loginForm}>
        <h2 className={Style.header}>Login</h2>
        {error && <p className={Style.textDanger}>{error}</p>} {/* Show error if it exists */}
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
              onChange={(e) => {
                setEmail(e.target.value);
                setError(''); // Reset error when email changes
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                setError(''); // Reset error when password changes
              }}
              required
            />
          </div>
          <Container className="d-flex flex-column m-0 p-0">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Logging In...' : 'Log In'}
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
