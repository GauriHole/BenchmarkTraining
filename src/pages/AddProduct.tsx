import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Product } from "../api/productApi";

export const addProduct = async (product: Omit<Product, "id">): Promise<Product> => {
    const { data } = await axios.post("https://fakestoreapi.com/products", product);
    return { ...data, id: data.id ?? Math.floor(Math.random() * 1000) }; 
  };  

const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        navigate("/");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <h2>Add Product</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
      <button
          className="cart-btn"
          onClick={() =>
          mutation.mutate({ ...formData, price: Number(formData.price) })
        }
    >
     Add Product
    </button>
    </div>
  );
};

export default AddProduct;
