



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import './App.css';
// import axios from 'axios';
// import BestSellers from './components/BestSellers';
// import ProductDetails from './components/ProductDetails';
// import PopularCategories from './components/PopularCategories';
// import SeasonalPicks from './components/SeasonalPicks'; // Adjust the path if necessary
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartCount, setCartCount] = useState(0);
//   const [category, setCategory] = useState('all');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const addToCart = () => setCartCount(cartCount + 1);
//   const removeFromCart = () => setCartCount(cartCount > 0 ? cartCount - 1 : 0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = 'http://localhost:3000/flipcart';
//         if (category && category !== 'all') {
//           url += `?category=${category}`;
//         }

//         const response = await axios.get(url);
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filtered = products.filter(product =>
//       product.product_name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar onSearch={handleSearch} setCategory={setCategory} />

//         <Routes>
//           <Route
//             path="/product-details"
//             element={<ProductDetails />}
//           />
//           <Route
//             path="*"
//             element={
//               <>
//                 <Routes>
//                   <Route
//                     path="/"
//                     element={
//                       <>
//                         <PopularCategories setCategory={setCategory} />
//                         <BestSellers products={filteredProducts} />
//                         {/* Render the SeasonalPicks component */}
//                         <SeasonalPicks products={products} />

//                       </>
//                     }
//                   />
//                   <Route
//                     path="/category/men"
//                     element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/women"
//                     element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/children"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/clothing"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/furniture"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/footwear"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/watches"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/pet-supplies"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/stationery"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   {/* <Route
//                     path="/category/Sports & Fitness"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   /> */}
//                   <Route
//                     path="/category/Jewellery"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                 </Routes>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function ProductListing({ products, addToCart, removeFromCart }) {
//   const navigate = useNavigate();

//   const goToProductDetails = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

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
//               onClick={() => goToProductDetails(product)}
//               style={{ cursor: 'pointer' }}
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

// export default App;
///////////////////////////////////////forlogin signup////////////////////////////




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import SignupPage from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import LoginLogoutApp from './components/LoginLogoutApp'; // Import the component
// import HomePage from './components/HomePage'; // Assuming you have a HomePage component
// import './App.css';
// import axios from 'axios';
// import BestSellers from './components/BestSellers';
// import ProductDetails from './components/ProductDetails';
// import PopularCategories from './components/PopularCategories';
// import SeasonalPicks from './components/SeasonalPicks'; // Adjust the path if necessary
// // import Stationery from './components/Stationery'; // Import the Stationery component
// import Stationery from './components/Stationery/Stationery';

// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartCount, setCartCount] = useState(0);
//   const [category, setCategory] = useState('all');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const addToCart = () => setCartCount(cartCount + 1);
//   const removeFromCart = () => setCartCount(cartCount > 0 ? cartCount - 1 : 0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = 'http://localhost:3000/flipcart';
//         if (category && category !== 'all') {
//           url += `?category=${category}`;
//         }

//         const response = await axios.get(url);
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filtered = products.filter(product =>
//       product.product_name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar onSearch={handleSearch} setCategory={setCategory} />

//         <Routes>
//           <Route path="/product-details" element={<ProductDetails />} />
//           <Route path="*" element={<HomePage />} />

//           <Route
//             path="/"
//             element={
//               <>
//                 <HomePage />
//                 <PopularCategories setCategory={setCategory} />
//                 <BestSellers products={filteredProducts} />
//                 <SeasonalPicks products={products} />
//                 {/* Stationery Component */}
//                 <Stationery
//                   products={filteredProducts.filter(product => product.product_category_tree[0].includes('Stationery'))}
//                   addToCart={addToCart}
//                   removeFromCart={removeFromCart}
//                 />
//               </>
//             }
//           />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/login-logout" element={<LoginLogoutApp />} /> {/* Add this route */}

//           <Route
//             path="/category/men"
//             element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//           />
//           <Route
//                     path="/category/women"
//                     element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/children"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/clothing"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/furniture"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/footwear"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/watches"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/pet-supplies"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   <Route
//                     path="/category/stationery"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//                   {/* <Route
//                     path="/category/Sports & Fitness"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   /> */}
//                   <Route
//                     path="/category/Jewellery"
//                     element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
//                   />
//           {/* Other category routes go here */}
//           <Route path="*" element={<HomePage />} />
//         </Routes>
//       </div>
//     </Router>
    
//   );
// }

// function ProductListing({ products, addToCart, removeFromCart }) {
//   const navigate = useNavigate();

//   const goToProductDetails = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

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
//               onClick={() => goToProductDetails(product)}
//               style={{ cursor: 'pointer' }}
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

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import LoginLogoutApp from './components/LoginLogoutApp'; // Import the component
import HomePage from './components/HomePage'; // Assuming you have a HomePage component
import './App.css';
import axios from 'axios';
import BestSellers from './components/BestSellers';
import ProductDetails from './components/ProductDetails';
import PopularCategories from './components/PopularCategories';
import SeasonalPicks from './components/SeasonalPicks'; // Adjust the path if necessary
import Stationery from './components/Stationery'; // Import the Stationery component
// import ProductListing from './components/ProductListing'; // Ensure this component exists
import { useNavigate } from 'react-router-dom';
import WhyChooseUs from './components/WhyChooseUs';
import OurClients from './components/OurClients';
import SocialMedia from './components/SocialMedia';


import Footer from'./components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // Remove if not used
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
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} setCategory={setCategory} />

        <Routes>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<HomePage />} />

          <Route
            path="/"
            element={
              <>
                <HomePage />
                <PopularCategories setCategory={setCategory} />
                <BestSellers products={filteredProducts} />
                <SeasonalPicks products={products} />
                <Stationery products={filteredProducts} />
                <WhyChooseUs/>
                <OurClients/>
                 <SocialMedia/>
                <Footer/>
                
              </>
            }
          />
          
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-logout" element={<LoginLogoutApp />} /> {/* Add this route */}

          <Route
            path="/category/men"
            element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/women"
            element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/children"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/clothing"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/furniture"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/footwear"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/watches"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/pet-supplies"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/stationery"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          {/* <Route
            path="/category/Sports & Fitness"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          /> */}
          <Route
            path="/category/Jewellery"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/Toys & School Supplies"
            element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Toys & School Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          
          {/* Other category routes go here */}
          <Route path="*" element={<HomePage />} />
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
