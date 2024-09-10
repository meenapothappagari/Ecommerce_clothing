
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
//     const query = event.target.value;
//     setSearchQuery(query);
//     onSearch(query); // Call the parent function to filter products dynamically
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


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = ({ cartCount, onSearch, products = [] }) => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);
//   }, []);

//   const handleSearchClick = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const handleInputChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     if (query.trim()) {
//       const lowerCaseQuery = query.toLowerCase();

//       // Ensure products is an array before filtering
//       const results = products.filter(product => {
//         const nameMatches = product.product_name.toLowerCase().includes(lowerCaseQuery);
//         const categoryMatches = product.product_category_tree.some(category => category.toLowerCase().includes(lowerCaseQuery));
//         return nameMatches || categoryMatches;
//       });
      
//       setSuggestions(results);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search-results?query=${searchQuery}`);
//     }
//   };

//   const handleSuggestionClick = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

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
//               <li><button onClick={handleLogout}>Logout</button></li>
//             ) : (
//               <>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Sign Up</Link></li>
//               </>
//             )}
//           </ul>
//         )}

//         <div className="search-container">
//           <FaSearch size={24} className="search-icon" onClick={handleSearchClick} />
//           {isSearchVisible && (
//             <div className="search-box">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 placeholder="Search products..."
//                 autoFocus
//               />
//               {suggestions.length > 0 && (
//                 <ul className="suggestions-list">
//                   {suggestions.map(product => (
//                     <li key={product._id} onClick={() => handleSuggestionClick(product)}>
//                       {product.product_name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               <button onClick={handleSearchSubmit}>Search</button>
//             </div>
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
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

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

        
        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
