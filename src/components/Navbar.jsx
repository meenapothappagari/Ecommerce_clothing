
import React, { useState } from 'react';
import './Navbar.css';
import { auth, googleProvider, signInWithPopup } from './firebase'; // Import Firebase auth and Google provider

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setMessage(`Google Sign-In successful! Welcome ${user.displayName}`);
      setIsLoginOpen(false); // Close login modal after successful login
    } catch (error) {
      setMessage('Google Sign-In failed! Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        setIsLoginOpen(false);
      } else {
        setMessage(data.error || 'Login failed! Check your email and password.');
      }
    } catch (error) {
      setMessage('Login failed!');
    }
  };

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
            setIsSignupOpen(false);
            setIsLoginOpen(true); // Open login modal after successful registration
        } else {
            setMessage(data.error || 'Registration failed! Check your inputs.');
        }
    } catch (error) {
        setMessage('Registration failed!');
    }
};

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Add your logo here */}
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button type="submit" className="search-icon">🔍</button>
        </form>
      </div>
      <div className="navbar-icons">
        <a href="#cart" className="icon">🛒Cart</a>
      </div>
      <div className="navbar-auth">
        <button className="login-button" onClick={() => setIsLoginOpen(true)}>Login</button>
        <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>&times;</span>
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
            </form>
            <button onClick={handleGoogleSignIn} className="google-signin-button">Sign In with Google</button>
            <p>{message}</p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsSignupOpen(false)}>&times;</span>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
