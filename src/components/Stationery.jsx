

// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaStar } from 'react-icons/fa';
// import './Stationery.css'; // Ensure this path is correct

// const Stationery = ({ products }) => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   // Filter for Stationery category and display all products
//   const stationeryProducts = products.filter(
//     (product) => product.product_category_tree?.[0]?.includes('Stationery')
//   );

//   // Slider settings to enable horizontal scrolling
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: false,
//   };

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const handleShopNow = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

//   return (
//     <div className="stationery">
//       <div className="header">
//         <h1>Our Best Offers for Today</h1>
//         <p>Explore our range of stationery products</p>

//         <div className="controls-container">
//           <div className="custom-arrows">
//             <button className="prev-arrow" onClick={handlePrev}>←</button>
//             <button className="next-arrow" onClick={handleNext}>→</button>
//           </div>
//           <Link to="/category/Stationery">
//             <button className="view-more-button">View More</button>
//           </Link>
//         </div>
//       </div>
//       <Slider ref={sliderRef} {...settings} className="stationery-carousel">
//         {stationeryProducts.map((product) => (
//           <div key={product._id} className="stationery-item">
//             <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
//             <h3>{product.product_name}</h3>
//             <div className="rating">
//               {[...Array(5)].map((_, index) => (
//                 <FaStar key={index} className="star" />
//               ))}
//             </div>
//             <p>₹{product.retail_price}</p>
//             <button className="shopnow" onClick={() => handleShopNow(product)}>
//               Shop Now
//             </button>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Stationery;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellers.css'; // Reuse the same CSS from BestSellers

const Stationery = ({ products }) => {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  // Filter for Stationery category
  const stationeryProducts = products.filter((product) =>
    product.product_category_tree?.[0]?.includes('Stationery')
  );

  const displayedProducts = viewMore
    ? stationeryProducts
    : stationeryProducts.slice(0, 3);

  const handleToggleView = () => setViewMore(!viewMore);

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="best-sellers">
      <div className="best">
        <h2>Our Best Stationery Products</h2>
        <button onClick={handleToggleView} className="view">
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>

      <div className="carousel">
        {displayedProducts.map((product) => (
          <div key={product._id} className="item">
            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
              className="myimage"
            />
            <h3>{product.product_name}</h3>
            <div className='price'>
              <p className="myretailprice">Retail Price: ₹{product.retail_price}</p>
              <button
                className="shopnow"
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
