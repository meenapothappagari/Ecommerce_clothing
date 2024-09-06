



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import './App.css';
// import Header from './components/Header';
// import axios from 'axios';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [category, setCategory] = useState('all');
//   const [products, setProducts] = useState([]); // State to store fetched products

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = 'http://localhost:3000/flipcart';
//         if (category && category !== 'all') {
//           url += `/category/${category}`;
//         }

//         const response = await axios.get(url);
//         setProducts(response.data); // Set the fetched data to state
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     console.log('Searching for:', query);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar onSearch={handleSearch} setCategory={setCategory} />
//         <Header />
        // <div className='fashion'>
        //   <h1>You can feel <br /><span>fashion</span> sense.</h1>
        //   <img src="https://img.freepik.com/premium-photo/woman-wearing-skirt-red-hat-is-holding-red-bag_972478-16267.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid"/>
        //   <div>
        //     <p>KMR is the right place for you to buy your fashion<br />clothes with a reasonable price and trust.</p>
        //     <div className='btn'>
        //       <button>Shop now</button>
        //       <button className='btn1'>Learn more</button>
        //     </div>
        //   </div>
        // </div>
//         {/* Product Listing Section */}
//         <div className="product-list">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product._id} className="product-item">
//                 <h3>{product.product_name}</h3>
//                 <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//                 <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p> 
//                 {/* <p><strong>category:</strong> ₹{product.product_category_tree}</p>  */}
//                 {/* <p><strong>Brand:</strong> {product.brand}</p>
//                 <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
//                 <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p> */}
//                 {/* <p>{product.description}</p> */}

//                 {/* Displaying the first image from the image array */}
//                 <img 
//                   src={JSON.parse(product.image)[0]} 
//                   alt={product.product_name} 
//                   style={{ width: '200px', height: 'auto' }}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import axios from 'axios';

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
        <Header cartCount={cartCount} /> 
        <div className='fashion'>
          <h1>You can feel <br /><span>fashion</span> sense.</h1>
          <img src="https://img.freepik.com/premium-photo/woman-wearing-skirt-red-hat-is-holding-red-bag_972478-16267.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid"/>
          <div>
            <p>KMR is the right place for you to buy your fashion<br />clothes with a reasonable price and trust.</p>
            <div className='btn'>
              <button>Shop now</button>
              <button className='btn1'>Learn more</button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        
=======
        <div className='photo'>
          <img style={{ width: '680px', height: '500px' }} src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4885.jpg?w=826&t=st=1725597393~exp=1725597993~hmac=a5f0a6e6ef3d97de80b1d21b9578736c84e78f10637b4a8cbd7fbc527591cdc5" />
          <img src="https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-4189.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid" />
          <img src="https://img.freepik.com/premium-photo/two-children-wearing-pajamas-with-word-fruit-them_1276068-11604.jpg?size=626&ext=jpg&ga=GA1.1.814101879.1718377277&semt=ais_hybrid"/>
        </div>
>>>>>>> 31bb7e0789669f578e4e26272821d22dcb91876c
        {/* Routing for product categories */}
        <Routes>
          {/* Home Route: Display all products */}
          <Route path="/" element={<ProductListing products={products} addToCart={addToCart} removeFromCart={removeFromCart} />} />

          {/* Category routes: Filter products based on categories */}
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

          <Route path="/" element={<ProductListing products={products} />} />

          {/* Category-specific routes */}
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
        </Routes>
        {/* <Routes>
          <Route path="/" element={<ProductListing products={products} />} />
          <Route path="/category/men" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Men'))} />} />
          <Route path="/category/women" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Women'))} />} />
          <Route path="/category/children" element={<ProductListing products={products.filter(product => product.product_category_tree[0].includes('Boys') || product.product_category_tree[0].includes('Girls'))} />} />
        </Routes> */}
      </div>
    </Router>
  );
}

// ProductListing Component (shows the filtered products)
function ProductListing({ products, addToCart, removeFromCart }) {
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
              // style={{ width: '200px', height: 'auto' }}
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
