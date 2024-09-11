



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
// import './Navbar.css';
// import { auth, googleProvider, signInWithPopup } from './firebase';

// const Navbar = ({ onSearch, cartCount }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);
//   };

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       // setMessage('Google Sign-In successful! Welcome' ${user.displayName});
//       setMessage(`Google Sign-In successful! Welcome ${user.displayName}`);

//       setIsLoginOpen(false);
//     } catch (error) {
//       setMessage('Google Sign-In failed! Please try again.');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },  
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage('Login successful!');
//         setIsLoginOpen(false);
//       } else {
//         setMessage(data.error || 'Login failed! Check your email and password.');
//       }
//     } catch (error) {
//       setMessage('Login failed!');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage('User registered successfully!');
//         setIsSignupOpen(false);
//         setIsLoginOpen(true);
//       } else {
//         setMessage(data.error || 'Registration failed! Check your inputs.');
//       }
//     } catch (error) {
//       setMessage('Registration failed!');
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png" alt="logo" />
//         <h4>KMR Fashions</h4>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/category/men">Men</Link></li>
//         <li><Link to="/category/women">Women</Link></li>
//         <li><Link to="/category/children">Children</Link></li>
//       </ul>

//       <ul className="navbar-links">
//         <li className="dropdown">
//           <button onClick={toggleDropdown} className="dropdown-button">
//             Categories <FaChevronDown />
//           </button>
//           {isDropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="/category/clothing">Clothing</Link></li>
//               <li><Link to="/category/furniture">Furniture</Link></li>
//               <li><Link to="/category/footwear">Footwear</Link></li>
//               <li><Link to="/category/watches">Watches</Link></li>
//               <li><Link to="/category/pet-supplies">Pet Supplies</Link></li>
//               <li><Link to="/category/stationery">Pen & Stationery</Link></li>
//               <li><Link to="/category/Jewellery">Jewellery</Link></li>
//             </ul>
//           )}
//         </li>
//       </ul>

//       <div className="navbar-search">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search products..."
//         />
//         <button type="submit" className="search-icon">🔍</button>
//       </div>

//       <div className="navbar-icons">
//         <div className="profile-icon" onClick={toggleProfileDropdown}>
//           <FaUser size={24} />
//         </div>
//         {isProfileDropdownOpen && (
//           <ul className="profile-dropdown">
//             <li><button onClick={() => setIsLoginOpen(true)}>Login</button></li>
//             <li><button onClick={() => setIsSignupOpen(true)}>Sign Up</button></li>
//           </ul>
//         )}
//         <div className="cart-icon">
//           <FaShoppingCart size={24} />
//           <span className="cart-count">{cartCount}</span>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isLoginOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close" onClick={() => setIsLoginOpen(false)}>&times;</button>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div className='logbtn'>
//                 <button type="submit">Login</button>
//                 <button onClick={handleGoogleSignIn} className="google-signin-button">Sign In with Google</button>
//               </div>
//             </form>
//             <p>{message}</p>
//           </div>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {isSignupOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close" onClick={() => setIsSignupOpen(false)}>&times;</button>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
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

// export default Navbar


//////////////////////////////////////for  login sign up//////////////

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
// import './Navbar.css';
// import { auth, googleProvider, signInWithPopup } from './firebase';

// const Navbar = ({ onSearch, cartCount }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const navigate = useNavigate();

//   // Check authentication status on component mount
//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);

//     // If not authenticated, redirect to signup page
//     if (!authStatus) {
//       setIsSignupOpen(true);
//     }
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);
//   };

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       setMessage(`Google Sign-In successful! Welcome ${user.displayName}`);
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       setIsLoginOpen(false);
//       setIsSignupOpen(false);
//     } catch (error) {
//       setMessage('Google Sign-In failed! Please try again.');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },  
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage('Login successful!');
//         localStorage.setItem('isAuthenticated', 'true');
//         setIsAuthenticated(true);
//         setIsLoginOpen(false);
//       } else {
//         setMessage(data.error || 'Login failed! Check your email and password.');
//       }
//     } catch (error) {
//       setMessage('Login failed!');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage('User registered successfully!');
//         setIsSignupOpen(false);
//         setIsLoginOpen(true);
//       } else {
//         setMessage(data.error || 'Registration failed! Check your inputs.');
//       }
//     } catch (error) {
//       setMessage('Registration failed!');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     setIsAuthenticated(false);
//     navigate('/');  // Redirect to home page after logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png" alt="logo" />
//         <h4>KMR Fashions</h4>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/category/men">Men</Link></li>
//         <li><Link to="/category/women">Women</Link></li>
//         <li><Link to="/category/children">Children</Link></li>
//       </ul>

//       <ul className="navbar-links">
//         <li className="dropdown">
//           <button onClick={toggleDropdown} className="dropdown-button">
//             Categories <FaChevronDown />
//           </button>
//           {isDropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="/category/clothing">Clothing</Link></li>
//               <li><Link to="/category/furniture">Furniture</Link></li>
//               <li><Link to="/category/footwear">Footwear</Link></li>
//               <li><Link to="/category/watches">Watches</Link></li>
//               <li><Link to="/category/pet-supplies">Pet Supplies</Link></li>
//               <li><Link to="/category/stationery">Pen & Stationery</Link></li>
//               <li><Link to="/category/jewellery">Jewellery</Link></li>
//             </ul>
//           )}
//         </li>
//       </ul>

//       <div className="navbar-search">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search products..."
//         />
//         <button type="submit" className="search-icon">🔍</button>
//       </div>

//       <div className="navbar-icons">
//         <div className="profile-icon" onClick={toggleProfileDropdown}>
//           <FaUser size={24} />
//         </div>
//         {isProfileDropdownOpen && (
//           <ul className="profile-dropdown">
//             {isAuthenticated ? (
//               <>
//                 <li><button onClick={handleLogout}>Logout</button></li>
//               </>
//             ) : (
//               <>
//                 <li><button onClick={() => setIsLoginOpen(true)}>Login</button></li>
//                 <li><button onClick={() => setIsSignupOpen(true)}>Sign Up</button></li>
//               </>
//             )}
//           </ul>
//         )}
//         <div className="cart-icon">
//           <FaShoppingCart size={24} />
//           <span className="cart-count">{cartCount}</span>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isLoginOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close" onClick={() => setIsLoginOpen(false)}>&times;</button>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div className='logbtn'>
//                 <button type="submit">Login</button>
//                 <button onClick={handleGoogleSignIn} className="google-signin-button">Sign In with Google</button>
//               </div>
//             </form>
//             <p>{message}</p>
//           </div>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {isSignupOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close" onClick={() => setIsSignupOpen(false)}>&times;</button>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
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



//////////////222222222222//////////////////////

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onSearch, cartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');  // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png" alt="logo" />
        <h4>KMR Fashions</h4>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/men">Men</Link></li>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/children">Children</Link></li>
      </ul>

      {/* <ul className="navbar-links">
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
            Categories <FaChevronDown />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/category/clothing">Clothing</Link></li>
              <li><Link to="/category/furniture">Furniture</Link></li>
              <li><Link to="/category/footwear">Footwear</Link></li>
              <li><Link to="/category/watches">Watches</Link></li>
              <li><Link to="/category/pet-supplies">Pet Supplies</Link></li>
              <li><Link to="/category/stationery">Pen & Stationery</Link></li>
              <li><Link to="/category/jewellery">Jewellery</Link></li>
            </ul>
          )}
        </li>
      </ul> */}

      <div className="navbar-search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
        <button type="submit" className="search-icon">🔍</button>
      </div>

      <div className="navbar-icons">
        <div className="profile-icon" onClick={toggleProfileDropdown}>
          <FaUser size={24} />
        </div>
        {isProfileDropdownOpen && (
          <ul className="profile-dropdown">
            {isAuthenticated ? (
              <>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        )}
        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



