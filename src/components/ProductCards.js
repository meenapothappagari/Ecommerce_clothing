// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // // import "./ProductCards.css";

// // const ProductCards = () => {
// //   const imageSize = { width: "150px", height: "150px" };
// //   const [products, setProducts] = useState([]);
// //   const [searchText, setSearchText] = useState('');
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [focused, setOnFocused] = useState(false);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3000/flipcart/products"); // Assuming this is the API for all products
// //       setProducts(response.data);
// //       setFilteredProducts(response.data);
// //     } catch (error) {
// //       console.error("Error in fetching product list", error);
// //     }
// //   };

// //   const handleSearch = async (searchText) => {
// //     setOnFocused(true);
// //     setSearchText(searchText);

// //     try {
// //       if (searchText.length > 2) {
// //         const response = await axios.get(`http://localhost:3000/flipcart/search?q=${searchText}`);
// //         setSuggestions(response.data.suggestions.slice(0, 5)); // Assuming the API returns 'suggestions' array

// //         // Optionally, update the filtered products based on the suggestions or API data
// //         setFilteredProducts(response.data.suggestions);
// //       } else {
// //         setSuggestions([]);
// //         setFilteredProducts(products);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching search suggestions:", error);
// //     }
// //   };

// //   const handleSuggestionClick = (productTitle) => {
// //     setSearchText(productTitle);
// //     handleSearch(productTitle);
// //   };

// //   const handleToggleBlur = () => {
// //     setOnFocused(false);
// //   };

// //   return (
// //     <div onClick={handleToggleBlur} style={{ textAlign: "center" }}>
// //       <input
// //         type="text"
// //         className="search-input"
// //         value={searchText}
// //         placeholder="Search Products..."
// //         onChange={(e) => handleSearch(e.target.value)}
// //       />
      
// //       {focused && suggestions.length > 0 && (
// //         <div className="suggestions">
// //           {suggestions.map((product, index) => (
// //             <div
// //               key={index}
// //               style={{ border: "1px solid grey", cursor: "pointer" }}
// //               onClick={() => handleSuggestionClick(product.title)}
// //             >
// //               {product.title}
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       <div className="cardWrapper">
// //         {filteredProducts.length === 0 ? (
// //           <h1>No Products found</h1>
// //         ) : (
// //           filteredProducts.map((product, index) => (
// //             <Link
// //               key={index}
// //               to={`/product/${product.id}`} // Assuming this is the correct product URL
// //               className="mainCard"
// //             >
// //               <div>
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   style={imageSize}
// //                 />
// //                 <h6>{product.title}</h6>
// //                 <h4>{product.price}</h4>
// //                 <div>
// //                   <span>{product?.rating?.rate}</span>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCards;


// // import React from 'react';

// // const ProductCards = ({ products }) => {
// //   if (!products || products.length === 0) {
// //     // return <p>No products available....</p>;
// //   }

// //   return (
// //     <div className="product-grid">
// //       {products.map((product) => (
// //         <div key={product._id} className="product-item">
// //           <h3>{product.product_name}</h3>
// //           <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
// //           <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
// //           <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductCards;


// // import React from 'react';

// // const ProductCards = ({ products = [] }) => {
// //   // Ensure products is an array before mapping
// //   if (!Array.isArray(products) || products.length === 0) {
// //     return <p>No products available....</p>;
// //   }

// //   return (
// //     <div className="product-grid">
// //       {products.map((product) => (
// //         <div key={product._id} className="product-item">
// //           <h3>{product.product_name}</h3>
// //           <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
// //           <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
// //           {product.image && (
// //             <img
// //               src={Array.isArray(JSON.parse(product.image)) ? JSON.parse(product.image)[0] : product.image}
// //               alt={product.product_name}
// //             />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductCards;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCards = ({ products = [] }) => {
//   // Ensure products is an array before mapping
//   if (!Array.isArray(products) || products.length === 0) {
//     return <p>No products available....</p>;
//   }

//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <div key={product._id} className="product-item">
//           <Link to={`/product-details/${product._id}`} className="product-link">
//             <h3>{product.product_name}</h3>
//             <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//             <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
//             {product.image && (
//               <img
//                 src={Array.isArray(JSON.parse(product.image)) ? JSON.parse(product.image)[0] : product.image}
//                 alt={product.product_name}
//               />
//             )}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;
