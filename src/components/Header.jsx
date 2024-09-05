import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"; 
// import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"; // Import icons
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";


const Header = ({ cartCount }) =>{
  return (
    <header>
      {/* <div className="logo">KMR Fashions</div> */}
      <div className="logo">
      <img className="img" src="https://d4l6e04z43qjx.cloudfront.net/img/fashion/fashion-logo.png"/>
      <h4>KMR Fashions</h4>
      {/* <div className="logo">KMR Fashions</div> */}
      </div>
      <nav>
        <ul>
        <li><Link to="/category/clothing">Clothing</Link></li>
          <li><Link to="/category/furniture">Furniture</Link></li>
          <li><Link to="/category/footwear">Footwear</Link></li>
          <li><Link to="/category/watches">Watches</Link></li>
          <li><Link to="/category/pet-supplies">Pet Supplies</Link></li>
          <li><Link to="/category/stationery">Pen & Stationery</Link></li>
        </ul>
      </nav>
      <div className="icons">
      <div className="icons">
        {/* <Link to="/contact" className="icon"><FaPhoneAlt /> Contact</Link> */}
        <Link to="/profile"><FaUser size={24} /></Link> {/* Profile icon */}
        {/* <Link to="/wishlist" className="icon"><FaHeart /> Wishlist</Link> */}
        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartCount}</span> {/* Cart count displayed here */}
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
