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


