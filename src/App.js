
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
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
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
