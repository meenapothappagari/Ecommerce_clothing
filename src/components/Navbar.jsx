
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ cartCount, onSearch, cartItems }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const navigate = useNavigate();

//   const handleCartClick = () => {
//     navigate('/cart');
//   }

//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);
//   }, []);

//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     // On every change, update the search results in the parent component (optional)
//     onSearch(query);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     if (searchQuery.trim() !== '') {
//       navigate(`/search-results?query=${searchQuery}`);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img
//             className="img"
//             src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png"
//             alt="KMR Fashions Logo"
//             style={{ cursor: 'pointer' }}
//           />
//         </Link>
//         <h4>KMR Fashions</h4>
//       </div>

//       <ul className="nav-links">
//         {/* <li><Link to="/">Home</Link></li> */}
//         <li><Link to="/category/men">Men</Link></li>
//         <li><Link to="/category/women">Women</Link></li>
//         <li><Link to="/category/children">Children</Link></li>
//         <li><Link to="/category/Sports & Fitness">Sports & Fitness</Link></li>
//       </ul>

//       <div className="navbar-icons">

//         <div className="search-container">
//           <FaSearch size={24} className="search-icon" onClick={toggleSearch} />
//           {isSearchOpen && (
//             <form onSubmit={handleSearchSubmit} className="search-form">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 placeholder="Search products..."
//                 autoFocus
//               />
//               <button type="submit" className="search-btn">Search</button>
//             </form>
//           )}
//         </div>

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
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Sign Up</Link></li>
//               </>
//             )}
//           </ul>
//         )}


//         <div className="cart-icon" onClick={handleCartClick}>
//           <FaShoppingCart size={24} />
//           <span className="cart-count">{cartCount}</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  // Check if the user is authenticated when the component mounts
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // On every change, update the search results in the parent component (optional)
    onSearch(query);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="img"
            src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png"
            alt="KMR Fashions Logo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <h4>KMR Fashions</h4>
      </div>

      <ul className="nav-links">
        <li><Link to="/category/men">Men</Link></li>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/children">Children</Link></li>
        <li><Link to="/category/Sports & Fitness">Sports & Fitness</Link></li>
      </ul>

      <div className="navbar-icons">
        <div className="search-container">
          <FaSearch size={24} className="search-icon" onClick={toggleSearch} />
          {isSearchOpen && (
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                autoFocus
              />
              <button type="submit" className="search-btn">Search</button>
            </form>
          )}
        </div>

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
        <Link to="/cart">
        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
      </div>
    </nav>
  );
};

// Navbar.jsx
export default Navbar;


