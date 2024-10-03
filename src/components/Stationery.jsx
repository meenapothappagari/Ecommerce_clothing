import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Stationery.css'; // Reuse the same CSS from BestSellers

const Stationery = ({ products }) => {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  // Filter for Stationery category
  const stationeryProducts = products.filter((product) =>
    product.product_category_tree?.[0]?.includes('Computers')
  );

  const displayedProducts = viewMore
    ? stationeryProducts
    : stationeryProducts.slice(0, 4);

  const handleToggleView = () => setViewMore(!viewMore);

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="stationery">
      <div className="best">
        <h2>Our Best Products</h2>
        <button onClick={handleToggleView} className="stationery-view">
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>

      <div className="stationery-carousel">
        {displayedProducts.map((product) => (
          <div key={product._id} className="stationery-item">
            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
              className="stationery-myimage"
            />
            <h3>{product.product_name}</h3>
            <div className='stationery-price'>
              <p className="stationery-myretailprice">Retail Price: ₹{product.retail_price}</p>
              <button
                className="stationery-shopnow"
                onClick={() => handleShopNow(product)}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stationery;
