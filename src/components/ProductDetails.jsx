

// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // import './ProductDetails.css';

// // const ProductDetails = ({ cartCount, setCartCount }) => {
// //   const location = useLocation();
// //   const product = location.state?.product;

// //   if (!product) return <p>No product details available</p>;

// //   const parsedImages = JSON.parse(product.image);

// //   const addToCart = () => {
// //     setCartCount(cartCount + 1);  // Increase cart count
// //   };

// //   const removeFromCart = () => {
// //     if (cartCount > 0) {
// //       setCartCount(cartCount - 1);  // Decrease cart count but not below 0
// //     }
// //   };

// //   return (
// //     <div className="product-details-container">
// //       <div className="product-image-section">
// //         <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
// //       </div>
// //       <div className="product-info-section">
// //         <h3>{product.product_name}</h3>
// //         <p>Retail Price: ₹{product.retail_price}</p>
// //         <p>Discounted Price: ₹{product.discounted_price}</p>
// //         <p>Brand: {product.brand || 'No brand information available'}</p>
// //         <p>Rating: {product.product_rating}</p>
// //         <p>Description: {product.description}</p>

// //         {/* Add to Cart Button */}
// //         <button onClick={addToCart}>Add to Cart</button>

// //         {/* Remove from Cart Button */}
// //         <button onClick={removeFromCart}>Remove from Cart</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;


// >>>>>>> ef91d7883acb8ea062d8160d8184c1ab6e8da642
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ProductDetails.css';

// <<<<<<< HEAD
// const ProductDetails = () => {
// =======
// const ProductDetails = ({ cartCount, setCartCount }) => {
// >>>>>>> ef91d7883acb8ea062d8160d8184c1ab6e8da642
//   const location = useLocation();
//   const product = location.state?.product;

//   if (!product) return <p>No product details available</p>;

//   const parsedImages = JSON.parse(product.image);

// <<<<<<< HEAD
// =======
//   const addToCart = () => {
//     setCartCount(cartCount + 1);  // Increase cart count
//   };

//   const removeFromCart = () => {
//     if (cartCount > 0) {
//       setCartCount(cartCount - 1);  // Decrease cart count but not below 0
//     }
//   };

// >>>>>>> ef91d7883acb8ea062d8160d8184c1ab6e8da642
//   return (
//     <div className="product-details-container">
//       <div className="product-image-section">
//         <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
// <<<<<<< HEAD
//         {/* <h3>{product.product_name}</h3> */}
//         {/* <p>Retail Price: ₹{product.retail_price}</p>
//         <p>Discounted Price: ₹{product.discounted_price}</p> */}
//       </div>
//       <div className="product-info-section">
//         {/* <h4>Specifications</h4> */}

//          <h3>{product.product_name}</h3>
//          <p>Retail Price: ₹{product.retail_price}</p>
//          <p>Discounted Price: ₹{product.discounted_price}</p>
//         <p>Brand: {product.brand || 'No brand information available'}</p>
//         <p>Rating: {product.product_rating}</p>
//         <p>Description: {product.description}</p>
// =======
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
// >>>>>>> ef91d7883acb8ea062d8160d8184c1ab6e8da642
//       </div>
//     </div>
//   );
// };

// <<<<<<< HEAD
// export default ProductDetails;
// =======
// export default ProductDetails;
// >>>>>>> ef91d7883acb8ea062d8160d8184c1ab6e8da642





// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ProductDetails.css';

// const ProductDetails = ({ cartCount, setCartCount }) => {
//   const location = useLocation();
//   const product = location.state?.product;

//   if (!product) return <p>No product details available</p>;

//   const parsedImages = JSON.parse(product.image);

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   const removeFromCart = () => {
//     if (cartCount > 0) {
//       setCartCount(cartCount - 1);  // Decrease cart count but not below 0
//     }
//   };

//   return (
//     <div className="product-details-container">
//       <div className='cartview'>
//         <div className="product-image-section">
//           <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
//         </div>
//         <div className='butn'>
//           <button onClick={addToCart}>Add to Cart</button>
//           <button onClick={removeFromCart}>Remove from Cart</button>
//         </div>
//       </div>

//       <div className="product-info-section">
//         <h3>{product.product_name}</h3>
//         <p><b>Retail Price: </b>₹{product.retail_price}</p>
//         <p><b>Discounted Price:</b> ₹{product.discounted_price}</p>
//         <p><b>Brand:</b> {product.brand || 'No brand information available'}</p>
//         <p><b>Rating:</b> {product.product_rating}</p>
//         <p><b>Description: </b>{product.description}</p>

//         {/* Add to Cart Button */}

//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ cartCount, setCartCount, addToCart }) => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p>No product details available</p>;

  const parsedImages = JSON.parse(product.image);

  // Remove item from cart
  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="product-details-container">
      <div className='cartview'>
        <div className="product-image-section">
          <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
        </div>
        <div className='butn'>
          {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>

          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>

      <div className="product-info-section">
        <h3>{product.product_name}</h3>
        <p><b>Retail Price: </b>₹{product.retail_price}</p>
        <p><b>Discounted Price:</b> ₹{product.discounted_price}</p>
        <p><b>Brand:</b> {product.brand || 'No brand information available'}</p>
        <p><b>Rating:</b> {product.product_rating}</p>
        <p><b>Description: </b>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
