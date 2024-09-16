
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import './Stationery.css'; // Using best-seller-styled CSS

const Stationery = ({ products }) => {
  // const sliderRef = useRef(null);
  const navigate = useNavigate();

  const stationeryProducts = products.filter(
    (product) => product.product_category_tree?.[0]?.includes('Computers')
  );

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   autoplay: false,
  // };

  // const handleNext = () => {
  //   sliderRef.current.slickNext();
  // };

  // const handlePrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="Stationery-best-sellers" style={{ overflowX: 'hidden' }}>
      <div className="Stationery-best">
        <h2>Our best offers for today</h2>
        <div className='Stationery-controls-container'>
          {/* <div className='Stationery-custom-arrows'>
            <button onClick={handlePrev} className="Stationery-prev-arrow">←</button>
            <button onClick={handleNext} className="Stationery-next-arrow">→</button>
          </div> */}
          <Link to="/category/Computers">
            <button className="Stationery-view">View More</button>
          </Link>
        </div>
      </div>

      <div className="Stationery-carousel">
        {stationeryProducts.map((product) => (
          <div key={product._id} className="Stationery-item">
            <img src={JSON.parse(product.image)[0]} alt={product.product_name} className="Stationery-myimage" />
            <h3>{product.product_name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star" />
              ))}
            </div>
            <p className="Stationery-myretailprice">₹{product.retail_price}</p>
            <button className="Stationery-shopnow" onClick={() => handleShopNow(product)}>
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Stationery;
