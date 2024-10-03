
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './CartPage.css';

// const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
//   const navigate = useNavigate();

//   // Calculate total price based on item quantities
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.discounted_price * (item.quantity || 1),
//     0
//   );

//   const handlePlaceOrder = () => {
//     navigate('/order-summary', {
//       state: {
//         cartItems,    // Passing cart items including images
//         totalPrice,   // Passing total price
//       },
//     });
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item._id} className="cart-item">
//                 <img src={JSON.parse(item.image)[0]} alt={item.product_name} />
//                 <div className="cart-item-details">
//                   <h3>{item.product_name}</h3>
//                   <p><strong>Price:</strong> ₹{item.discounted_price}</p>

//                   {/* Quantity control */}
//                   <div className="quantity-control">
//                     <b>Qty:</b>
//                     <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
//                     <span>{item.quantity || 1}</span>
//                     <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
//                   </div>

//                   <button onClick={() => removeFromCart(item._id)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total Price */}
//           <div className="cart-total">
//             <h3>Total Price: ₹{totalPrice}</h3>
//             <button className="checkout-btn" onClick={handlePlaceOrder}>
//               Place Order
//             </button>
//           </div>
//         </>
//       )}
//       <Link to="/" className="back">Back to Shopping</Link>
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  // Calculate total price based on item quantities
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discounted_price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    navigate('/order-summary', {
      state: {
        cartItems,    // Passing cart items including images
        totalPrice,   // Passing total price
      },
    });
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={JSON.parse(item.image)[0]} alt={item.product_name} />
                <div className="cart-item-details">
                  <h3>{item.product_name}</h3>
                  <p><strong>Price:</strong> ₹{item.discounted_price}</p>

                  {/* Quantity control */}
                  <div className="quantity-control">
                    <b>Qty:</b>
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                  </div>

                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="cart-total">
            <h3>Total Price: ₹{totalPrice}</h3>
            <button className="checkout-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
      <Link to="/" className="back">Back to Shopping</Link>
    </div>
  );
};

export default CartPage;
