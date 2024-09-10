
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup, signOut } from './firebase'; // Assuming Firebase setup
import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!data.exists) {
        setMessage('User does not exist. Please sign up first.');
        return;
      }

      const loginResponse = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (loginResponse.ok) {
        setMessage('Login successful!');
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        navigate('/'); // Redirect to home page
      } else {
        setMessage('Login failed! Check your email and password.');
      }
    } catch (error) {
      setMessage('Login failed!');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setMessage(`Google Sign-In successful! Welcome ${user.displayName}`);
      localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
      setIsAuthenticated(true); // Update state
      navigate('/'); // Redirect to home page
    } catch (error) {
      setMessage('Google Sign-In failed! Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase (if using Google Auth)
      localStorage.removeItem('isAuthenticated'); // Remove authentication flag
      setIsAuthenticated(false); // Update state
      setMessage('Logged out successfully.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setMessage('Logout failed! Please try again.');
    }
  };

  return (
    <div className="form-page">
      <h1>Welcome to KMR Fashion</h1>
      <div className="form-container">
        {isAuthenticated ? (
          <div>
            <h2>Welcome Back!</h2>
            <button onClick={handleLogout}>Logout</button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
              <button type="submit">Login</button>
              <button type="button" onClick={handleGoogleSignIn} className="google-signin-button">
                Sign In with Google
              </button>
            </form>
            <p>{message}</p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;