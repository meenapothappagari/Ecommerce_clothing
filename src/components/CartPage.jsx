

// CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.discounted_price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={JSON.parse(item.image)[0]} alt={item.product_name} />
              <div className="cart-item-details">
                <h3>{item.product_name}</h3>
                <p><strong>Price:</strong> ₹{item.discounted_price}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
      <Link to="/">Back to Shopping</Link>
    </div>
  );
};

export default CartPage;
