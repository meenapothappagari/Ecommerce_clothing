
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import BestSellers from './components/BestSellers';
import ProductDetails from './components/ProductDetails';
import Fashion from './components/Fashion';
import { useNavigate } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]); // State to store fetched products

  const addToCart = () => setCartCount(cartCount + 1);
  const removeFromCart = () => setCartCount(cartCount > 0 ? cartCount - 1 : 0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3000/flipcart';
        if (category && category !== 'all') {
          url += `?category=${category}`;  // Adjusted to handle category query params
        }

        const response = await axios.get(url);
        setProducts(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} setCategory={setCategory} />

        <Routes>
          <Route
            path="/product-details"
            element={<ProductDetails />}
          />
          <Route
            path="*"
            element={
              <>
                <Header cartCount={cartCount} />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Fashion />
                        <BestSellers products={products} />
                      </>
                    }
                  />
                  <Route
                    path="/category/men"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Men'))} />}
                  />
                  <Route
                    path="/category/women"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Women'))} />}
                  />
                  <Route
                    path="/category/children"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} />}
                  />
                  <Route
                    path="/category/clothing"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} />}
                  />
                  <Route
                    path="/category/furniture"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} />}
                  />

                  <Route
                    path="/category/footwear"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} />}
                  />
                  <Route
                    path="/category/watches"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} />}
                  />
                  <Route
                    path="/category/pet-supplies"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} />}
                  />
                  <Route
                    path="/category/stationery"
                    element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} />}
                  />
                  {/* Add more category routes as needed */}
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// ProductListing Component (shows the filtered products)
// function ProductListing({ products, addToCart, removeFromCart }) {
//   return (
//     <div className="product-list">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <div key={product._id} className="product-item">
//             <h3>{product.product_name}</h3>
//             <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//             <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>

//             <img
//               src={JSON.parse(product.image)[0]}
//               alt={product.product_name}
//             />
//             <button onClick={addToCart}>Add to Cart</button>
//             <button onClick={removeFromCart}>Remove from Cart</button>
//           </div>
//         ))
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }

function ProductListing({ products, addToCart, removeFromCart }) {
  const navigate = useNavigate();

  const goToProductDetails = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.product_name}</h3>
            <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
            <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>

            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
              onClick={() => goToProductDetails(product)}  // Navigate on image click
              style={{ cursor: 'pointer' }}  // Add pointer cursor for better UX
            />
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}


export default App;
