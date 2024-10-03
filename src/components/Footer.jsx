


// import React from 'react';
// import './Footer.css'; // Create a separate CSS file for the footer styles or move styles from App.css
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import from react-icons

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">

//         {/* Combined Links, Category, and Shop in one div */}
//         <div className="footer-section combined-sections">
//           <div className="links">
//             <h3>Links</h3>
//             <ul>
//               <li>Home</li>
//               <li>Services</li>
//               <li>Shop</li>
//               <li>For Sale</li>
//             </ul>
//           </div>
//           <div className="category">
//             <h3>Category</h3>
//             <ul>
//               <li>Men</li>
//               <li>Women</li>
//               <li>Children</li>
//               <li>Winter</li>
//             </ul>
//           </div>
//           <div className="shop">
//             <h3>Shop</h3>
//             <ul>
//               <li>Contact</li>
//               <li>Help</li>
//               <li>Customers</li>
//               <li>Forum</li>
//             </ul>
//           </div>
//         </div>

//         <div className="vertical-line"></div> {/* Vertical Line */}

//         <div className="footer-section-subscribe">
//           <h4>Subscribe to get regular updates</h4>
//           <p>We are giving regular discounts and offers for our  <br />customers who subscribe now.</p>
//           <div className="subscribe-form">
//             <input type="email" placeholder="Enter your email" />
//             <button>Subscribe</button>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© 2022 kmr All rights reserved</p>
//         <div className="social-icons">
//           <FaFacebook id="icon" />
//           <FaTwitter id="icon" />
//           <FaInstagram id="icon" />
//           <FaLinkedin id="icon" />
//         </div>
//         <p>Terms and Conditions apply</p>
//         <p>privacy policy</p>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import the CSS for the footer
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Combined Links, Category, and Shop in one div */}
        <div className="footer-section combined-sections">
          <div className="links">
            <h3>Links</h3>
            <ul>
              {/* Use Link components for navigation */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>
          <div className="category">
            <h3>Category</h3>
            <ul>
            <li><Link to="/category/men">Men</Link></li>
            <li><Link to="/category/women">Women</Link></li>
            <li><Link to="/category/children">Children</Link></li>
              {/* <li>Men</li>
              <li>Women</li>
              <li>Children</li> */}
            </ul>
          </div>
          <div className="shop">
            <h3>Shop</h3>
            <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/customer-service">Customer Service</Link></li>
              {/* <li>Contact</li>
              <li>Help</li>
              <li>Customers</li> */}
            </ul>
          </div>
        </div>

        <div className="vertical-line"></div> {/* Vertical Line */}

        <div className="footer-section-subscribe">
          <h4>Subscribe to get regular updates</h4>
          <p>We are giving regular discounts and offers for our <br /> customers who subscribe now.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 kmr All rights reserved</p>
        <div className="social-icons">
          <FaFacebook id="icon" />
          <FaTwitter id="icon" />
          <FaInstagram id="icon" />
          <FaLinkedin id="icon" />
        </div>
        <p>Terms and Conditions apply</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;