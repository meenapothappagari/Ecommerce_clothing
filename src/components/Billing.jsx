import React from 'react';
import './Billing.css'; // Ensure to update the CSS

const Billing = () => {
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
            <input type="text" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label>Last Name <span className="required">*</span></label>
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label>Country/Region <span className="required">*</span></label>
            <input type="text" placeholder="Country/Region" />
          </div>

          <div className="form-group">
            <label>Street Address <span className="required">*</span></label>
            <input type="text" placeholder="Street Address" />
          </div>

          <div className="form-group">
            <label>State <span className="required">*</span></label>
            <input type="text" placeholder="State" />
          </div>

          <div className="form-group">
            <label>Town/City <span className="required">*</span></label>
            <input type="text" placeholder="Town/City" />
          </div>

          <div className="form-group">
            <label>Pin Code <span className="required">*</span></label>
            <input type="text" placeholder="Pin Code" />
          </div>

          <div className="form-group">
            <label>Phone <span className="required">*</span></label>
            <input type="text" placeholder="Phone" />
          </div>

          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label>Account Username <span className="required">*</span></label>
            <input type="text" placeholder="Username" />
          </div>
        </div>

        {/* Second Div: Product and Payment Details */}
        <div className="product-details">
          <h2>Products</h2>

          <div className="product">
            <span>T-shirt</span>
            <span>$299</span>
          </div>

          <div className="subtotal">
            <span>Subtotal</span>
            <span>$299</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span>$299</span>
          </div>

          <div className="payment-method">
            <span>Credit Card / Debit Card / Net Banking <span className="required">*</span></span>
          </div>

          <div className="razorpay-option">
            <span>Razorpay</span>
          </div>

          <button className="pay-button">Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
