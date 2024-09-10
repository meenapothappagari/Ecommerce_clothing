
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ onSearch, cartCount,  cartItems }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);
//   };

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     setIsAuthenticated(false);
//     navigate('/');  // Redirect to home page after logout
//   };

//   const isProductInCart = (product) => {
//     return cartItems.some(item => item.id === product.id);
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
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Sign Up</Link></li>
//               </>
//             )}
//           </ul>
//         )}
//         <div className="cart-icon">
//           <FaShoppingCart size={24} />
//           <span className="cart-count">{cartCount}</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ cartCount, onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);
//   }, []);

//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);  // Dynamically filter products
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     if (searchQuery.trim() !== '') {
//       navigate(`/search?query=${searchQuery}`);
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
//         <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png" alt="logo" />
//         <h4>KMR Fashions</h4>
//       </div>

//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/category/men">Men</Link></li>
//         <li><Link to="/category/women">Women</Link></li>
//         <li><Link to="/category/children">Children</Link></li>
//       </ul>

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
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Sign Up</Link></li>
//               </>
//             )}
//           </ul>
//         )}

//         {/* Search Icon and Input */}
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

//         <div className="cart-icon">
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
import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the parent function to filter products dynamically
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
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
        <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png" alt="logo" />
        <h4>KMR Fashions</h4>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/men">Men</Link></li>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/children">Children</Link></li>
      </ul>

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

        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
