
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('User registered successfully!');
        navigate('/'); // Redirect to home page
      } else {
        setMessage(data.error || 'Registration failed! Check your inputs.');
      }
    } catch (error) {
      setMessage('Registration failed!');
    }
  };

  return (
    <div className="form-page">
      <h1>Welcome to KMR Fashion</h1>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>{message}</p>
        <p>Do you have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
