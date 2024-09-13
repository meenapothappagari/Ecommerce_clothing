// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a separate CSS file for the footer styles or move styles from App.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Shop</li>
            <li>For Sale</li>
          </ul>
        </div>
        <div className="footer-section category">
          <h3>Category</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Children</li>
            <li>Winter</li>
          </ul>
        </div>
        <div className="footer-section shop">
          <h3>Shop</h3>
          <ul>
            <li>Contact</li>
            <li>Help</li>
            <li>Customers</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="vertical-line"></div> {/* Vertical Line */}
        <div className="footer-section subscribe">
          <h4>Subscribe to get regular updates</h4>
          <p>We are giving regular discounts and offers for customers who subscribe now.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 All rights reserved</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>Terms and Conditions apply</p>
      </div>
    </footer>
  );
};

export default Footer;
