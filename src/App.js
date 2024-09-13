
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import SignupPage from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import './App.css';
// import axios from 'axios';
// import Fashion from './components/Fashion';
// import BestSellers from './components/BestSellers';
// import NewCollection from './components/NewCollection';
// import ProductDetails from './components/ProductDetails';
// import SearchResultsPage from './components/SearchResultsPage';


// import { useNavigate } from 'react-router-dom';

// function App() {
//   // const [searchQuery, setSearchQuery] = useState('');
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

//   // const handleSearch = (query) => {
//   //   // setSearchQuery(query);
//   //   const filtered = products.filter(product =>
//   //     product.product_name.toLowerCase().includes(query.toLowerCase())
//   //   );
//   //   setFilteredProducts(filtered);
//   // };

//   const handleSearch = (query) => {
//     const filtered = products.filter(product =>
//       product.product_name.toLowerCase().includes(query.toLowerCase()) ||
//       product.product_category_tree.some(category => category.toLowerCase().includes(query.toLowerCase()))
//     );
//     setFilteredProducts(filtered);
//   };


//   return (
//     <Router>
//       <div className="App">
//         {/* <Navbar cartCount={cartCount} /> */}
//         <Navbar cartCount={cartCount} onSearch={handleSearch} products={products} />


//         <Routes>
//           {/* <Route path="/product-details" element={<ProductDetails />} /> */}
//           {/* <Route 
//           path="/product-details" 
//           element={
//             <ProductDetails 
//               cartCount={cartCount} 
//               setCartCount={setCartCount} // Pass setCartCount to ProductDetails
//             />
//           } 
//         /> */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Fashion />
//                 <BestSellers products={filteredProducts} />
//                 <NewCollection products={filteredProducts} />
//                 {/* <ProductListing products={filteredProducts} /> */}
//               </>
//             }
//           />


//           <Route path="/" element={<ProductListing products={filteredProducts} />} />
//           {/* <Route path="/product-details" element={<ProductDetails cartCount={cartCount} setCartCount={setCartCount} />} /> */}
//           <Route path="/product-details" element={<ProductDetails cartCount={cartCount} setCartCount={setCartCount} />} />

//           <Route path="/search-results" element={<SearchResultsPage ProductDetails />} />
//           {/* <Route path="/search" element={<SearchResultsPage filteredProducts={filteredProducts} />} /> */}
//           {/* <Route
//             path="/"
//             element={
//               <>
//                 <Fashion />
//                 <BestSellers products={filteredProducts} />
//                 <NewCollection products={filteredProducts} />
//               </>
//             }


//           /> */}
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />


//           <Route
//             path="/category/men"
//             element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} />}
//           />
//           <Route
//             path="/category/women"
//             element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} />}
//           />
//           <Route
//             path="/category/children"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} />}
//           />
//           <Route
//             path="/category/clothing"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} />}
//           />
//           <Route
//             path="/category/furniture"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} />}
//           />
//           <Route
//             path="/category/footwear"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} />}
//           />
//           <Route
//             path="/category/watches"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} />}
//           />
//           <Route
//             path="/category/pet-supplies"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} />}
//           />
//           <Route
//             path="/category/stationery"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} />}
//           />
//           <Route
//             path="/category/Sports & Fitness"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))}  />}
//           />
//           <Route
//             path="/category/Jewellery"
//             element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} />}
//           />
//           {/* Other category routes go here */}
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
//             {
//            
//           </div>
//         ))
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import HomePage from './components/HomePage';
// import ProductDetails from './components/ProductDetails';
// import PopularCategories from './components/PopularCategories';
// import SeasonalPicks from './components/SeasonalPicks';
// import Stationery from './components/Stationery';
// import WhyChooseUs from './components/WhyChooseUs';
// import OurClients from './components/OurClients';
// import SocialMedia from './components/SocialMedia';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import SignupPage from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import Fashion from './components/Fashion';
// import BestSellers from './components/BestSellers';
// import NewCollection from './components/NewCollection';
// import SearchResultsPage from './components/SearchResultsPage';
// // import CategoryPage from './components/CategoryPage'; // Import the new component
// // import ProductListing from './components/ProductListing'; // Import the new component
// import './App.css';
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
//       product.product_name.toLowerCase().includes(query.toLowerCase()) ||
//       product.product_category_tree.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartCount} onSearch={handleSearch} products={products} />
//         <Fashion />
//         <PopularCategories setCategory={setCategory} />
//         <SeasonalPicks products={products} />
//         <Stationery products={filteredProducts} />
//         <BestSellers products={products} />
//         <NewCollection products={products} />
//         <WhyChooseUs />
//         <OurClients />
//         <SocialMedia />
//         {/* <CategoryPage/> */}
//         <Footer />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product-details" element={<ProductDetails cartCount={cartCount} setCartCount={setCartCount} />} />
//           <Route path="/search-results" element={<SearchResultsPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />
          
          
//           {/* Category Routes */}
//           <Route path="/category/men" element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Men'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/women" element={<ProductListing products={filteredProducts.filter(product => product.product_category_tree[0].includes('Women'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/children" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/clothing" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Clothing'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/furniture" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Furniture'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/footwear" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Footwear'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/watches" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Watches'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/pet-supplies" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Pet Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/stationery" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Stationery'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/jewellery" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Jewellery'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/toys-school-supplies" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Toys & School Supplies'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
//           <Route path="/category/sports-fitness" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Sports & Fitness'))} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          
//           {/* Other Routes */}
//           <Route path="*" element={<HomePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// function ProductListing({ products, addToCart, removeFromCart }) {
//     const navigate = useNavigate();
  
//     const goToProductDetails = (product) => {
//       navigate('/product-details', { state: { product } });
//     };
  
//     return (
//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product._id} className="product-item">
//               <h3>{product.product_name}</h3>
//               <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//               <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
  
//               <img
//                 src={JSON.parse(product.image)[0]}
//                 alt={product.product_name}
//                 onClick={() => goToProductDetails(product)}
//                 style={{ cursor: 'pointer' }}
//               />
//               {/* <button onClick={addToCart}>Add to Cart</button>
//               <button onick={removeFromCart}>Remove from Cart</button> */}
//             </div>
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>
//     );
//   }

// export default App;


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
        <BestSellers products={products} />
        <NewCollection products={products} />

        <Routes>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<HomePage />} />

          <Route
            path="/"
            element={
              <>
                <HomePage />
                <PopularCategories setCategory={setCategory} />
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
