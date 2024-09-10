import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellers.css';  // You can reuse this CSS file for styling

function NewCollection({ products }) {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  // Filter jewelry products from the list
  const jewelryProducts = products.filter((product) =>
    product.product_category_tree[0].includes('Jewellery')
  );

  // Display 4 products initially or all products if viewMore is true
  const displayedProducts = viewMore ? jewelryProducts : jewelryProducts.slice(0, 3);

  const handleToggleView = () => setViewMore(!viewMore);

  const handleShopNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="best-sellers">
      <div className="best"> 
        <h2>New Collection: Jewelry</h2>
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

export default NewCollection;
