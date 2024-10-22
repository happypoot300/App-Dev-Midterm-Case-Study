import React, { useState } from 'react';
import Style from "../css modules/loginpage.module.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For disabling the button during login attempt
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error message on every attempt
    setError('');

    const hardcodedUser = {
      username: '1@example.com', // Correct username for login
      password: '123', // Correct password for login
    };

    if (username !== hardcodedUser.username) {
      setError('Invalid email or password'); // Email is incorrect
    } else if (username === hardcodedUser.username && password !== hardcodedUser.password) {
      setError('Invalid Password'); // Password is incorrect
    } else {
      // If both are correct
      setLoading(true); // Set loading to true when logging in
      setTimeout(() => {
        console.log('Login successful!');
        navigate('/'); // Redirect on successful login
      }, 2000); // Simulate a delay for the login process
    }
  };

  return (
    <div className={Style.loginContainer}>
      <div className={Style.loginForm}>
        <h2 className={Style.header}>Login</h2>
        {error && <p className={Style.textDanger}>{error}</p>} {/* Show error if it exists */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(''); // Clear error when typing again
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(''); // Clear error when typing again
              }}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
