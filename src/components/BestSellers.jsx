


// import React, { useState } from 'react';
// import './BestSellers.css';


// function BestSellers({ products }) {
//   const [viewMore, setViewMore] = useState(false);

//   // Filter products for Women's clothing
//   const womensClothing = products.filter((product) =>
//     product.product_category_tree[0].includes('Women')
//   );

//   // Limit display to 3 items initially
//   const displayedProducts = viewMore ? womensClothing : womensClothing.slice(0, 3);

//   const handleToggleView = () => {
//     setViewMore(!viewMore);
//   };

//   return (
//     <div className="best-sellers">
//       <div className='best'>
//         <h2>Best Sellers for Today</h2>
//         <button onClick={handleToggleView} className="view">
//           {viewMore ? 'View Less' : 'View More'}
//         </button>
//       </div>

//       <div className="carousel">
//         {displayedProducts.map((product) => (
//           <div key={product._id} className="item">
//             <img
//               src={JSON.parse(product.image)[0]}
//               alt={product.product_name}
//               className="myimage"
//             />
//             <h3>{product.product_name}</h3>
//             <div className='price'>
//               {/* <h3 className='name'>{product.product_name}</h3> */}
//               <p className="myretailprice">Retail Price: ₹{product.retail_price}</p>
//               <button className="shopnow">Shop Now</button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default BestSellers;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellers.css';

function BestSellers({ products }) {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  const womensClothing = products.filter((product) =>
    product.product_category_tree[0].includes('Kitchen & Dining')
  );

  const displayedProducts = viewMore ? womensClothing : womensClothing.slice(0, 3);

  const handleToggleView = () => setViewMore(!viewMore);

  // const handleShopNow = (product) => {
  //   navigate('/product-details', { state: { product } });
  // };
  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="best-sellers">
      <div className="best"> 
        <h2>Best Sellers for Today</h2>
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
}
export default BestSellers;