

// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// import './SeasonalPicks.css';

// const SeasonalPicks = ({ products }) => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   // Filter for Jewellery category and display all products
//   const sportsProducts = products.filter(
//     (product) => product.product_category_tree?.[0]?.includes('Jewellery')
//   );

//   // Slider settings to enable horizontal scrolling
//   const settings = {
//     dots: false, // Hide dots to simplify UI
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Show 4 products at a time
//     slidesToScroll: 1, // Scroll 1 product at a time
//     arrows: true, // Enable arrows for navigation
//     autoplay: false, // Disable autoplay to allow manual scrolling
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
//     <div className="seasonal-picks">
//       <div className="header">
//         <h1>Seasonal Sports Picks</h1>
//         <p>
//           Winter collection of our shop<br />
//           that have been bought for interested people
//         </p>

//         <div className="controls-container">
//           <div className="custom-arrows">
//             <button className="prev-arrow" onClick={handlePrev}>←</button>
//             <button className="next-arrow" onClick={handleNext}>→</button>
//           </div>
//           <Link to="/category/Jewellery">
//             <button className="view-more-button">View More</button>
//           </Link>
//         </div>
//       </div>
//       <Slider ref={sliderRef} {...settings} className="seasonal-carousel">
//         {sportsProducts.map((product) => (
//           <div key={product._id} className="seasonal-item">
//             <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
//             <h3>{product.product_name}</h3>
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

// export default SeasonalPicks;


// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import './SeasonalPicks.css';

// const SeasonalPicks = ({ products }) => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   const sportsProducts = products.filter(
//     (product) => product.product_category_tree?.[0]?.includes('Jewellery')
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
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
//     <div className="best-sellers">
//       <div className="best">
//         <h2>Seasonal Sports Picks</h2>
//         <div className='controles-container'>
//           <div className='custom-arrow'>
//             <button onClick={handlePrev} className="prev-arrow">←</button>
//             <button onClick={handleNext} className="next-arrow">→</button>
//           </div>
//           <Link to="/category/Jewellery">
//             <button className="view">View More</button>
//           </Link>
//         </div>
//       </div>

//       <Slider ref={sliderRef} {...settings} className="carousel">
//         {sportsProducts.map((product) => (
//           <div key={product._id} className="item">
//             <img
//               src={JSON.parse(product.image)[0]}
//               alt={product.product_name}
//               className="myimage"
//             />
//             <h3>{product.product_name}</h3>
//             <div className='price'>
//               <p className="myretailprice">Retail Price: ₹{product.retail_price}</p>
//               <button
//                 className="shopnow"
//                 onClick={() => handleShopNow(product)}
//               >
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SeasonalPicks;




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
    (product) => product.product_category_tree?.[0]?.includes('Sunglasses')
  );

  // Slider settings to enable horizontal scrolling
  const settings = {
    dots: false, // Hide dots to simplify UI
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 4 products at a time
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
        <h1>Seasonal Picks</h1>
        <p>
          Winter collection of our shop<br />
          that have been bought for interested people
        </p>

        <div className="seasonal-controls-container">
          <div className="seasonal-custom-arrows">
            <button className="seasonal-prev-arrow" onClick={handlePrev}>←</button>
            <button className="seasonal-next-arrow" onClick={handleNext}>→</button>
          </div>
          <Link to="/category/Sunglasses">
            <button className="seasonal-view-more-button">View More</button>
          </Link>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="seasonal-carousel">
        {sportsProducts.map((product) => (
          <div key={product._id} className="seasonal-item">
            <img src={JSON.parse(product.image)[0]} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <div className='priceprod'>
              <p>₹{product.retail_price}</p>
              <button className="Seasonal-shopnow" onClick={() => handleShopNow(product)}>
                Shop Now
              </button>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SeasonalPicks;