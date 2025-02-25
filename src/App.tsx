import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router> 
      <CartProvider> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
    </Router>
    </AuthProvider>
  );
};

export default App;
