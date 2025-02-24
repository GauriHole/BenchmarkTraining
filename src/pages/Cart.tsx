import React from "react";
import { useCart } from "../context/CartContext";
import "../App.css";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : 
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button className="cart-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
