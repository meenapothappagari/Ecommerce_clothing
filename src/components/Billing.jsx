// import React from 'react';
// import './Billing.css'; // Ensure to update the CSS

// const Billing = () => {
//   return (
//     <div className="billing-section">
//       <h4>Billing Details</h4>
//       <hr />

//       {/* Main Billing Details Section */}
//       <div className="billing-container">
//         {/* First Div: Personal and Address Details */}
//         <div className="billing-details">
//           <div className="form-group">
//             <label>First Name <span className="required">*</span></label>
//             <input type="text" placeholder="First Name" />
//           </div>

//           <div className="form-group">
//             <label>Last Name <span className="required">*</span></label>
//             <input type="text" placeholder="Last Name" />
//           </div>

//           {/* <div className="form-group">
//             <label>Country/Region <span className="required">*</span></label>
//             <input type="text" placeholder="Country/Region" />
//           </div>

//           <div className="form-group">
//             <label>Street Address <span className="required">*</span></label>
//             <input type="text" placeholder="Street Address" />
//           </div>

//           <div className="form-group">
//             <label>State <span className="required">*</span></label>
//             <input type="text" placeholder="State" />
//           </div>

//           <div className="form-group">
//             <label>Town/City <span className="required">*</span></label>
//             <input type="text" placeholder="Town/City" />
//           </div> */}

//           {/* <div className="form-group">
//             <label>Pin Code <span className="required">*</span></label>
//             <input type="text" placeholder="Pin Code" />
//           </div> */}

// <div className="form-group">
//   <label>Phone <span className="required">*</span></label>
//   <input type="text" placeholder="Phone" />
// </div>

//           {/* <div className="form-group">
//             <label>Email <span className="required">*</span></label>
//             <input type="email" placeholder="Email" />
//           </div> */}

//           <div className="form-group">
//             <label>Account Username <span className="required">*</span></label>
//             <input type="text" placeholder="Username" />
//           </div>
//         </div>

//         {/* Second Div: Product and Payment Details */}
//         <div className="product-details">
//           <h2>Products</h2>

//           <div className="product">
//             <span>T-shirt</span>
//             <span>$299</span>
//           </div>

//           <div className="subtotal">
//             <span>Subtotal</span>
//             <span>299</span>
//           </div>

//           <div className="total">
//             <span>Total</span>
//             <span>$299</span>
//           </div>

//           <div className="payment-method">
//             <span>Credit Card / Debit Card / Net Banking <span className="required">*</span></span>
//           </div>

//           <div className="razorpay-option">
//             <span>Razorpay</span>
//           </div>

//           <button className="pay-button">Proceed to Pay</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Billing;

// import React from 'react';
// import './Billing.css'; // Ensure to update the CSS
// import { useLocation } from 'react-router-dom';

// const Billing = () => {
//   const location = useLocation();
//   const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

//   return (
//     <div className="billing-section">
//       <h4>Billing Details</h4>
//       <hr />

//       {/* Main Billing Details Section */}
//       <div className="billing-container">
//         {/* First Div: Personal and Address Details */}
//         <div className="billing-details">
//           <div className="form-group">
//             <label>First Name <span className="required">*</span></label>
//             <input type="text" placeholder="First Name" required />
//           </div>
//           <div className="form-group">
//             <label>Phone <span className="required">*</span></label>
//             <input type="text" placeholder="Phone" />
//           </div>

//           {/* Add other input fields as necessary */}

//           <div className="form-group">
//             <label>Email <span className="required">*</span></label>
//             <input type="email" placeholder="Email" required />
//           </div>
//         </div>

//         {/* Second Div: Product and Payment Details */}
//         <div className="product-details">
//           <h2>Products</h2>

//           {cartItems.map(item => (
//             <div className="product" key={item._id}>
//               <span>{item.product_name}</span>
//               <span>₹{item.discounted_price * (item.quantity || 1)}</span>
//             </div>
//           ))}

//           <div className="subtotal">
//             <span>Subtotal</span>
//             <span>₹{totalPrice}</span>
//           </div>

//           <div className="total">
//             <span>Total</span>
//             <span>₹{totalPrice}</span>
//           </div>

//           <div className="payment-method">
//             <span>Credit Card / Debit Card / Net Banking <span className="required">*</span></span>
//           </div>
//           <div className='razorpay'>
//             <img src='data:image/jpeg;base64,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'/>
//           </div>

//           <button className="pay-button">Proceed to Pay</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Billing;





import React, { useState } from 'react';
import './Billing.css'; // Ensure to update the CSS
import { useLocation } from 'react-router-dom';

const Billing = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  // State to track form inputs and whether the "Proceed to Pay" button is clicked
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    phone: '',
    email: '',
  });
  const [showRazorpay, setShowRazorpay] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  // Save details to local storage and proceed to payment
  const handleProceedToPay = () => {
    // Save billing details to localStorage
    localStorage.setItem('billingDetails', JSON.stringify(formDetails));

    // Display Razorpay image (or trigger payment logic)
    setShowRazorpay(true);
  };

  return (
    <div className="billing-section">
      <h4>Billing Details</h4>
      <hr />

      {/* Main Billing Details Section */}
      <div className="billing-container">
        {/* First Div: Personal and Address Details */}
        <div className="billing-details">
          <div className="form-group">
            <label>First Name <span className="required">*</span></label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formDetails.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone <span className="required">*</span></label>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Add other input fields as necessary */}

          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Second Div: Product and Payment Details */}
        <div className="product-details">
          <h2>Products</h2>

          {cartItems.map(item => (
            <div className="product" key={item._id}>
              <span>{item.product_name}</span>
              <span>₹{item.discounted_price * (item.quantity || 1)}</span>
            </div>
          ))}

          <div className="subtotal">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="payment-method">
            <span>Credit Card / Debit Card / Net Banking <span className="required">*</span></span>
          </div>

          {/* Conditionally render the Razorpay image after clicking "Proceed to Pay" */}
          {showRazorpay && (
            <div className="razorpay">
              {/* Replace with actual Razorpay integration */}
              {/* <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' alt="Razorpay" /> */}
              <img src='data:image/jpeg;base64,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' />

            </div>
          )}

          <button className="pay-button" onClick={handleProceedToPay}>Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
