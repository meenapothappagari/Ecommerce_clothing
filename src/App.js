


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import PopularCategories from './components/PopularCategories';
import SeasonalPicks from './components/SeasonalPicks';
import Stationery from './components/Stationery';
import WhyChooseUs from './components/WhyChooseUs';
import OurClients from './components/OurClients';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Fashion from './components/Fashion';
import BestSellers from './components/BestSellers';
import NewCollection from './components/NewCollection';
import SearchResultsPage from './components/SearchResultsPage';
import Billing from './components/Billing';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addToCart = () => setCartCount(cartCount + 1);
  const removeFromCart = () => setCartCount(cartCount > 0 ? cartCount - 1 : 0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3000/flipcart';
        if (category && category !== 'all') {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.product_name.toLowerCase().includes(query.toLowerCase()) ||
      product.product_category_tree.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartCount} onSearch={handleSearch} products={products} />
        <Fashion />
       

        <Routes>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />


          <Route
            path="/"
            element={
              <>
                <HomePage />
                {/* <Billing/> */}
                <PopularCategories setCategory={setCategory} />
                <BestSellers products={products} />
                <NewCollection products={products} />
                <SeasonalPicks products={products} />
                <Stationery products={filteredProducts} />
                <WhyChooseUs />
                <OurClients />
                <SocialMedia />
                <Footer />
              </>
            }
          />

          {/* Category Routes */}
          <Route path="/category/men" element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/women" element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/children" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/clothing" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/furniture" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/footwear" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/watches" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/pet-supplies" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet-Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/stationery" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/jewellery" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          {/* <Route path="/category/watches" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />} /> */}
           <Route path="/category/Food & Nutrition" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Food & Nutrition'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/Escan Lace Up" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Escan Lace Up'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          {/* <Route path="/category/Kitchen & Dining" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Kitchen & Dining'))} addToCart={addToCart} removeFromCart={removeFromCart} />} /> */} 


        </Routes>
      </div>
    </Router>
  );
}

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
              onClick={() => goToProductDetails(product)}
              style={{ cursor: 'pointer' }}
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



////////////////////////////////////////////////////////////////////

