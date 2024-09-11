
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import './Stationery.css'; // Update with correct CSS file

const Stationery = ({ products }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Filter for Stationery category and display all products

  // const stationeryProducts = products
  //   .filter(product => product.product_category_tree?.[0]?.includes('Furniture'))
  //   .slice(0, 3); // Adjust the number to limit how many products to display
  const stationeryProducts = products.filter(
    (product) => product.product_category_tree?.[0]?.includes('Furniture')
  );

  // Slider settings to enable horizontal scrolling
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
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
    <div className="stationery">
      <div className="header">
        <h1>Stationery Picks</h1>
        <p>Explore our range of stationery products</p>

        <div className="controls-container">
          <div className="custom-arrows">
            <button className="prev-arrow" onClick={handlePrev}>←</button>
            <button className="next-arrow" onClick={handleNext}>→</button>
          </div>
          <Link to="/category/Furniture">
            <button className="view-more-button">View More</button>
          </Link>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="stationery-carousel">
        {stationeryProducts.map((product) => (
          <div key={product._id} className="stationery-item">
            <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star" />
              ))}
            </div>
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

export default Stationery;
