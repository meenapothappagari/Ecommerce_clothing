
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ProductDetails.css';

// const ProductDetails = ({ cartCount, setCartCount }) => {
//   const location = useLocation();
//   const product = location.state?.product;

//   if (!product) return <p>No product details available</p>;

//   const parsedImages = JSON.parse(product.image);

//   const addToCart = () => {
//     setCartCount(cartCount + 1);  // Increase cart count
//   };

//   const removeFromCart = () => {
//     if (cartCount > 0) {
//       setCartCount(cartCount - 1);  // Decrease cart count but not below 0
//     }
//   };

//   return (
//     <div className="product-details-container">
//       <div className="product-image-section">
//         <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
//       </div>
//       <div className="product-info-section">
//         <h3>{product.product_name}</h3>
//         <p>Retail Price: ₹{product.retail_price}</p>
//         <p>Discounted Price: ₹{product.discounted_price}</p>
//         <p>Brand: {product.brand || 'No brand information available'}</p>
//         <p>Rating: {product.product_rating}</p>
//         <p>Description: {product.description}</p>

//         {/* Add to Cart Button */}
//         <button onClick={addToCart}>Add to Cart</button>

//         {/* Remove from Cart Button */}
//         <button onClick={removeFromCart}>Remove from Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ cartCount, setCartCount }) => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p>No product details available</p>;

  const parsedImages = JSON.parse(product.image);

  const addToCart = () => {
    setCartCount(cartCount + 1);  // Increase cart count
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);  // Decrease cart count but not below 0
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
      </div>
      <div className="product-info-section">
        <h3>{product.product_name}</h3>
        <p>Retail Price: ₹{product.retail_price}</p>
        <p>Discounted Price: ₹{product.discounted_price}</p>
        <p>Brand: {product.brand || 'No brand information available'}</p>
        <p>Rating: {product.product_rating}</p>
        <p>Description: {product.description}</p>

        {/* Add to Cart Button */}
        <button onClick={addToCart}>Add to Cart</button>

        {/* Remove from Cart Button */}
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
