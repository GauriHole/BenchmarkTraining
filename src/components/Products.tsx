import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../App.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const Product: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = Array.from(new Set(products?.map((p) => p.category))) || [];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product.category === selectedCategory);

  if (isLoading) return <h3>Loading Products...</h3>;
  if (isError) return <h3>Error loading products.</h3>;

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-container">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="card">
            <img className="img" src={product.image} alt={product.title} />
            <div className="card-desc">
              <h4>{product.title}</h4>
              <h4>${product.price}</h4>
              <h4>{product.category}</h4>
            </div>
            <div className="cart-main">
              <Link to={`/product/${product.id}`}>
                <button className="cart-btn">View Details</button>
              </Link>{" "}
              &nbsp;
              {isAuthenticated ? (
                <button className="cart-btn" onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              ) : (
                <Link to="/login">
                  <button className="cart-btn-disabled">Login for Cart</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
