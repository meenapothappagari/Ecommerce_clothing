import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from './components/ProductDetails';
import PopularCategories from './components/PopularCategories';
import SeasonalPicks from './components/SeasonalPicks';
import Stationery from './components/Stationery';
import WhyChooseUs from './components/WhyChooseUs';
import OurClients from './components/OurClients';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Fashion from './components/Fashion';
import BestSellers from './components/BestSellers';
import NewCollection from './components/NewCollection';
import SearchResultsPage from './components/SearchResultsPage';
import AddressPage from './components/AddressPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import ContactPage from './components/ContactPage';
import HelpPage from './components/HelpPage';
import CustomerServicePage from './components/CustomerServicePage';
import ServicesPage from './components/ServicesPage';
import ShopPage from './components/ShopPage';
import Billing from './components/Billing';

import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [latestCategory, setLatestCategory] = useState(null);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item._id === product._id);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartCount(cartCount + 1);

    // Set the category of the latest added product
    setLatestCategory(product.product_category_tree[0]); // Assuming category is in this format
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    const updatedCart = cartItems.map(item =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  
    // Calculate the total quantity of items in the cart
    const totalItemsCount = updatedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalItemsCount);  // Update the cart count here
  };
  

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
  };


  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


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



        <Routes>
          {/* <Route path="/product-details" element={<ProductDetails />} /> */}
          {/* <Route path="*" element={<HomePage />} /> */}
          <Route path="/product-details" element={<ProductDetails addToCart={addToCart} cartCount={cartCount} setCartCount={setCartCount} />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} totalPrice={totalPrice} />} />
          <Route path="/address" element={<AddressPage cartItems={cartItems} totalPrice={totalPrice} />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
          <Route path="/billing" element={<Billing />} />



          <Route
            path="/"
            element={
              <>
                <Fashion />
                <PopularCategories setCategory={setCategory} />
                <SeasonalPicks products={products} />
                <BestSellers products={products} />
                <Stationery products={filteredProducts} />
                <NewCollection products={filteredProducts} />
                <WhyChooseUs />
                <OurClients />
                <SocialMedia />
              </>
            }
          />
          {/* Static Pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/customer-service" element={<CustomerServicePage />} />


          <Route path="/category/men" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />

          <Route path="/category/Sports & Fitness" element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/women" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/children" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/clothing" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/furniture" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/footwear" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/watches" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/pet-supplies" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet-Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/Sunglasses" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sunglasses'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/category/Computers" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Computers'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
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
            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
              onClick={() => goToProductDetails(product)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{product.product_name}</h3>
            <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
            <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default App;


