import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams();  // Extract category name from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categoryName) {
      console.error('categoryName is undefined or null');
      return;  // Exit if categoryName is undefined
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/flipcart?category=${categoryName}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (!categoryName) {
    return <p>Category not found</p>;  // Render fallback UI if categoryName is undefined
  }

  return (
    <div className="category-page">
      <h1>{categoryName} Products</h1>  {/* Display categoryName without charAt */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-item">
              <h3>{product.product_name}</h3>
              <img
                src={JSON.parse(product.image)[0]}
                alt={product.product_name}
                style={{ cursor: 'pointer' }}
              />
              <p>₹{product.discounted_price}</p>
            </div>
          ))
        ) : (
          <p>No products available for {categoryName}.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;

