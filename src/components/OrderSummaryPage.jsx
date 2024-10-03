
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummaryPage.css';

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [userDetails, setUserDetails] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem('userDeliveryDetails'));
    setUserDetails(savedDetails);
  }, []);

  const handleConfirmDelivery = () => {
    setIsConfirmed(true);
  };

  const handleEditAddress = () => {
    // Navigate back to Address Page, passing the user details for editing
    navigate('/address', { state: { userDetails } });
  };

  return (
    <div className="order-summary-page">
      <h2>Delivery Address</h2>
      {userDetails && (
        <div className="address-details">
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
          <p>{userDetails.houseNumber}, {userDetails.landmark}</p>
          <p>{userDetails.city}, {userDetails.state}</p>
          <p>Pincode: {userDetails.pincode}</p>
          <p>Alternate Phone: {userDetails.alternatePhoneNumber}</p>
        </div>
      )}

      {!isConfirmed ? (
        <div className='delivery'>
          <button onClick={handleConfirmDelivery} className="confirm-delivery-button">
            Deliver Here
          </button>
          <button onClick={handleEditAddress} className="edit-address-button">
            Edit Address
          </button>
        </div>
      ) : (
        <div className="confirmed">
          <p>✔ Delivery Address Confirmed</p>
        </div>
      )}

      <h2>Order Summary</h2>
      <div className="cart-summary">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={JSON.parse(item.image)[0]} alt={item.product_name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.product_name} - Quantity: {item.quantity}</p>
                <p>Price: ₹{item.discounted_price * item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>

      <h3>Total Price: ₹{totalPrice}</h3>
      <div className='checkoutbtn'>
        <button onClick={() => navigate('/billing', { state: { cartItems, totalPrice } })} className="proceed-to-pay-button">
          Proceed to checkout
        </button>
      </div>

    </div>
  );
};

export default OrderSummaryPage;



