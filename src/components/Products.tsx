import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { fetchProducts, deleteProduct, updateProduct } from "../api/productApi";
import { Product } from "../api/productApi"; // ✅ Keep this import

import "../App.css";

const ProductList: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const queryClient = useQueryClient();

  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (oldData: Product[] | undefined) => {
        return oldData
          ? oldData.map((product) =>
              product.id === updatedProduct.id ? updatedProduct : product
            )
          : [];
      });
      alert("✅ Product edited successfully!");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData(["products"], (oldData: Product[] | undefined) => {
        return oldData ? oldData.filter((product) => product.id !== deletedId) : [];
      });
      alert("❌ Product deleted successfully!");
      setShowConfirmDelete(false);
      setProductToDelete(null);
    },
  });

  const handleDelete = (productId: number) => {
    setProductToDelete(productId);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (productToDelete !== null) {
      deleteMutation.mutate(productToDelete);
    }
  };

  if (isLoading) return <h3>Loading Products...</h3>;
  if (isError) return <h3>Error loading products.</h3>;

  return (
    <div>
      <Link to="/add-product" style={{ position: "absolute", top: "380px", right: "50px" }}>
        <button className="cart-btn">Add Product</button>
      </Link>

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
              <Link to={`/product/${product.id}`}>
                <button className="cart-btn">View Details</button>
              </Link>
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
              &nbsp;
              <Link to={`/edit-product/${product.id}`}>
                <button className="cart-btn">Edit</button>
              </Link>
              &nbsp;
              <button
                className="cart-btn"
                onClick={() => handleDelete(product.id)}
                disabled={deleteMutation.isLoading}
              >
                {deleteMutation.isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showConfirmDelete && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete this product?</h3>
            <button className="cart-btn" onClick={confirmDelete}>Yes, Delete</button>
            <button className="cart-btn" onClick={() => setShowConfirmDelete(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
