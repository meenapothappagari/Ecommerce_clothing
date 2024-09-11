

import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SeasonalPicks.css';

const SeasonalPicks = ({ products }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Filter for Jewellery category and display all products
  const sportsProducts = products.filter(
    (product) => product.product_category_tree?.[0]?.includes('Jewellery')
  );

  // Slider settings to enable horizontal scrolling
  const settings = {
    dots: false, // Hide dots to simplify UI
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 products at a time
    slidesToScroll: 1, // Scroll 1 product at a time
    arrows: true, // Enable arrows for navigation
    autoplay: false, // Disable autoplay to allow manual scrolling
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="seasonal-picks">
      <div className="header">
        <h1>Seasonal Sports Picks</h1>
        <p>
          Winter collection of our shop<br />
          that have been bought for interested people
        </p>

        <div className="controls-container">
          <div className="custom-arrows">
            <button className="prev-arrow" onClick={handlePrev}>←</button>
            <button className="next-arrow" onClick={handleNext}>→</button>
          </div>
          <Link to="/category/Jewellery">
            <button className="view-more-button">View More</button>
          </Link>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="seasonal-carousel">
        {sportsProducts.map((product) => (
          <div key={product._id} className="seasonal-item">
            <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>₹{product.retail_price}</p>
            <button className="shopnow" onClick={() => handleShopNow(product)}>
              Shop Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SeasonalPicks;


