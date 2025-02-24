import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../App.css";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>🛒 Shop-Easy </h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
