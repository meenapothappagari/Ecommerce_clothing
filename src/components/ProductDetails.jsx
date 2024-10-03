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
