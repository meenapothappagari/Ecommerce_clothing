
// // // export default App
// // import React from 'react';
// // import Navbar from './components/Navbar';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       {/* Other components or content */}
// //     </div>
// //   );
// // }

// // export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './components/Login';


// import './App.css';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     // Example search handling
//     // console.log('Searching for:', query);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar onSearch={handleSearch} />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/register" element={<Register />} /> */}
//           <Route path="/" element={
//             <div>
//               <h1>Search Results for: {searchQuery}</h1>
//             </div>
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// // Login from './components/Login';
// import './App.css';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     // Example search handling
//     console.log('Searching for:', query); // This can be expanded based on your actual search logic
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar onSearch={handleSearch} />
//         <Routes>
//           {/* <Route path="/login" element={<Login />} /> */}
//           {/* Add additional routes as needed */}
//           <Route
//             path="/"
//             element={
//               <div>
//                 <h1>Search Results for: {searchQuery}</h1>
//                 {/* Render search results or other components here */}
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Perform any side-effects or initializations if needed
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Example search handling
    console.log('Searching for:', query);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<div><h1>Search Results for: {searchQuery}</h1></div>}
          />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
