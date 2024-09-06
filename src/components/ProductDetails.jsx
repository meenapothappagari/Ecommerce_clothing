import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p>No product details available</p>;

  const parsedImages = JSON.parse(product.image);

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={parsedImages[0]} alt={product.product_name} className="main-image" />
        {/* <h3>{product.product_name}</h3> */}
        {/* <p>Retail Price: ₹{product.retail_price}</p>
        <p>Discounted Price: ₹{product.discounted_price}</p> */}
      </div>
      <div className="product-info-section">
        {/* <h4>Specifications</h4> */}
        {/* <ul>
          {Object.entries(JSON.parse(product.product_specifications)["product_specification"]).map(([key, spec]) => (
            <li key={key}>
              <strong>{spec.key}:</strong> {spec.value}
            </li>
          ))}
        </ul> */}
         <h3>{product.product_name}</h3>
         <p>Retail Price: ₹{product.retail_price}</p>
         <p>Discounted Price: ₹{product.discounted_price}</p>
        <p>Brand: {product.brand || 'No brand information available'}</p>
        <p>Rating: {product.product_rating}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
