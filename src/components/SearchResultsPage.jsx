import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products to filter them
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/flipcart');
        const data = await response.json();
        // Filter products based on the query
        const filtered = data.filter(product =>
          product.product_name.toLowerCase().includes(query.toLowerCase()) ||
          product.product_category_tree.some(category => category.toLowerCase().includes(query.toLowerCase()))
        );
        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  const handleImageClick = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="search-results-container">
      {products.map((product) => (
        <div key={product._id} className="search-result-item">
          <img
            src={JSON.parse(product.image)[0]}
            alt={product.product_name}
            onClick={() => handleImageClick(product)}
            style={{ cursor: 'pointer' }}
          />
          <h3>{product.product_name}</h3>
          <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
          <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
        </div>
      ))}
    </div>
  );
};
export default SearchResultsPage;
