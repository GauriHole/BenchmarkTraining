import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
  const { addToCart } = useCart();

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h3>Loading Products...</h3>;
  if (isError) return <h3>Error loading products.</h3>;

  return (
    <div className="product-container">
      {products?.map((product) => (
        <div key={product.id} className="card">
          <img className="img" src={product.image} alt={product.title} />
          <div className="card-desc">
            <h4>{product.title}</h4>
            <h4>${product.price}</h4>
            <h4>{product.category}</h4>
          </div>
          <div className="cart-main">
            <button className="cart-btn" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
    <Link to={`/product/${product.id}`}>
        <button className="cart-btn">View Details</button>
    </Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
