
// import React, { useState } from 'react';
// import './Navbar.css';
// import axios from 'axios';

// const Navbar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchQuery);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('hhttp://localhost:3000/login', { email, password });
//       setMessage('Login successful!');
//       localStorage.setItem('token', response.data.token);
//       setIsLoginOpen(false); // Close the modal after successful login
//     } catch (err) {
//       setMessage('Login failed!');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/signup', { username, email, password });
//       setMessage('User registered successfully!');
//       setIsSignupOpen(false); // Close the modal after successful registration
//     } catch (err) {
//       setMessage('Registration failed!');
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         {/* Add your logo here */}
//       </div>
//       <ul className="navbar-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/shop">Shop</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//       <div className="navbar-search">
//         <form onSubmit={handleSearchSubmit}>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search..."
//           />
//           <button type="submit" className="search-icon">🔍</button>
//         </form>
//       </div>
//       <div className="navbar-icons">
//         <a href="#cart" className="icon">🛒Cart</a>
//       </div>
//       <div className="navbar-auth">
//         <button className="login-button" onClick={() => setIsLoginOpen(true)}>Login</button>
//         <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
//       </div>

//       {/* Login Modal */}
//       {isLoginOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsLoginOpen(false)}>&times;</span>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Login</button>
//             </form>
//             <p>{message}</p>
//           </div>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {isSignupOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsSignupOpen(false)}>&times;</span>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Sign Up</button>
//             </form>
//             <p>{message}</p>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import axios from 'axios';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const validateLogin = () => {
    if (!email || !password) {
      setMessage('Email and Password are required.');
      return false;
    }
    return true;
  };

  const validateRegister = () => {
    if (!username || !email || !password) {
      setMessage('All fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    try {
      const response = await axios.post('http://localhost:3000/signup', {username, email, password });
      setMessage('Login successful!');
      localStorage.setItem('token', response.data.token);
      setIsLoginOpen(false);
      setIsLoggedIn(true);
    } catch (err) {
      setMessage('Login failed!');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;
    try {
      // Check if the user already exists
      const existingUser = await axios.post('http://localhost:3000/check-user', { email });
      if (existingUser.data.exists) {
        setMessage('User already exists. Please login.');
     
        return;
      }

      await axios.post('http://localhost:3000/login', {  email, password });
      setMessage('User registered successfully!');
      setIsSignupOpen(false);
      setIsLoginOpen(true);
    } catch (err) {
      setMessage('Registration failed!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
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
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="login-button" onClick={() => setIsLoginOpen(true)}>Login</button>
            <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
          </>
        )}
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
