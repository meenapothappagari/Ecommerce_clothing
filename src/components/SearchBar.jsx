// // // import React from 'react';
// // // import { useLocation } from 'react-router-dom';

// // // const SearchResultsPage = ({ filteredProducts }) => {
// // //   const location = useLocation();
// // //   const query = new URLSearchParams(location.search).get('query');

// // //   return (
// // //     <div>
// // //       <h2>Search Results for "{query}"</h2>
// // //       {/* <div className="product-list">
// // //         {filteredProducts.length > 0 ? (
// // //           filteredProducts.map(product => (
// // //             <div key={product._id} className="product-item">
// // //               <h3>{product.product_name}</h3>
// // //               <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
// // //               <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
// // //               <img
// // //                 src={JSON.parse(product.image)[0]}
// // //                 alt={product.product_name}
// // //               />
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No products found.</p>
// // //         )}
// // //       </div> */}
// // //     </div>
// // //   );
// // // };

// // // export default SearchResultsPage;



// // import React from 'react';

// // const SearchResultsPage = ({ filteredProducts }) => {
// //   return (
// //     <div className="search-results">
// //       {filteredProducts.length > 0 ? (
// //         filteredProducts.map(product => (
// //           <div key={product._id} className="product-item">
// //             <h3>{product.product_name}</h3>
// //             <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
// //             <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
// //             <img
// //               src={JSON.parse(product.image)[0]}
// //               alt={product.product_name}
// //               style={{ width: '100px' }}
// //             />
// //           </div>
// //         ))
// //       ) : (
// //         <p>No products found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchResultsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { debounce } from 'lodash';
// // import './SearchBar.css';
// import { FaSearch, FaTimes } from 'react-icons/fa';

// const SearchBar = ({ onSearchSelect }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     // Debounced API call to fetch search suggestions
//     const fetchSuggestions = debounce(async (query) => {
//       if (query.length > 2) {
//         try {
//           const response = await axios.get(`https://api.example.com/search?q=${query}`);
//           setSuggestions(response.data.suggestions); // Assuming API returns a 'suggestions' array
//         } catch (error) {
//           console.error('Error fetching search suggestions:', error);
//         }
//       } else {
//         setSuggestions([]);
//       }
//     }, 300); // 300ms delay for debounce

//     if (searchQuery) {
//       fetchSuggestions(searchQuery);
//     }

//     return () => {
//       fetchSuggestions.cancel(); // Cleanup debounce when component unmounts
//     };
//   }, [searchQuery]);

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     if (searchQuery.trim()) {
//       // Call the parent onSearchSelect with the final query
//       onSearchSelect(searchQuery);
//       setIsFocused(false); // Close suggestions
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setSuggestions([]);
//     onSearchSelect(suggestion);
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     setSuggestions([]);
//   };

//   return (
//     <div className="search-bar-container">
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           className="search-input"
//           value={searchQuery}
//           onChange={handleInputChange}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setTimeout(() => setIsFocused(false), 200)}
//           placeholder="Search for products, brands, and more"
//         />
//         <button type="submit" className="search-icon">
//           <FaSearch />
//         </button>
//         {searchQuery && (
//           <button type="button" className="clear-icon" onClick={clearSearch}>
//             <FaTimes />
//           </button>
//         )}
//       </form>
      
//       {isFocused && suggestions.length > 0 && (
//         <ul className="suggestions-list">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="suggestion-item"
//               onClick={() => handleSuggestionClick(suggestion)}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
