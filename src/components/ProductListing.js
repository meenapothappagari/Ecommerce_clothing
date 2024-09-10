// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductListing = ({ products }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (productId) => {
//     navigate(`/product-details?id=${productId}`);
//   };

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div
//           key={product._id}
//           className="product-item"
//           onClick={() => handleProductClick(product._id)}
//         >
//           <h3>{product.product_name}</h3>
//           <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//           <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
//           <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductListing;
