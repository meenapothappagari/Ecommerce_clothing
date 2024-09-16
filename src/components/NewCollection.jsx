import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCollection.css';  // You can reuse this CSS file for styling

function NewCollection({ products }) {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  // Filter jewelry products from the list
  const jewelryProducts = products.filter((product) =>
    product.product_category_tree[0].includes('Home Decor & Festive Needs')
  );

  // Display 4 products initially or all products if viewMore is true
  const displayedProducts = viewMore ? jewelryProducts : jewelryProducts.slice(0, 3);

  const handleToggleView = () => setViewMore(!viewMore);

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="NewCollection">
      <div className="NewCollection-best"> 
        <h2>New Collection:Home Decor & Festive Needs</h2>
        <button onClick={handleToggleView} className="NewCollection-view">
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>

      <div className="NewCollection-carousel">
        {displayedProducts.map((product) => (
          <div key={product._id} className="NewCollection-item">
            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
              className="NewCollection-myimage"
            />
            <h3>{product.product_name}</h3>
            <div className='NewCollection-price'>
              <p className="NewCollection-myretailprice">Retail Price: ₹{product.retail_price}</p>
              <button
                className="NewCollection-shopnow"
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

export default NewCollection;


// import React from 'react';

// const NewCollection = ({ products }) => {
//   if (!products) {
//     return <p>Loading products...</p>; // or another loading state
//   }

//   const newCollection = (products || []).filter(product => product.category === 'New');

//   return (
//     <div className="new-collection">
//       <h2>New Collection</h2>
//       <div className="products">
//         {newCollection.length > 0 ? (
//           newCollection.map(product => (
//             <div key={product.id} className="product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No new collection items available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewCollection;


// import React from 'react';

// const NewCollection = ({ products }) => {
//   // Check if products are available
//   if (!products || products.length === 0) {
//     return <p>Loading products...</p>; // Or another loading state
//   }

//   // Filter products for those in the "New" category
//   const newCollection = products.filter(product => product.category === 'New');

//   return (
//     <div className="new-collection">
//       <h2>New Collection</h2>
//       <div className="products">
//         {newCollection.length > 0 ? (
//           newCollection.map(product => (
//             <div key={product.id} className="product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No new collection items available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewCollection;
