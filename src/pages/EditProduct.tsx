import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Product } from "../api/productApi"; 

const fetchProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const updateProduct = async (product: Product): Promise<Product> => {
  const { data } = await axios.put(
    `https://fakestoreapi.com/products/${product.id}`,
    product
  );
  return data;
};

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (oldData: Product[] | undefined) =>
        oldData?.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/");
    },
  });

  const [formData, setFormData] = useState<Product>({
    id: Number(id) || 0,
    title: "",
    price: 0,
    category: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({ ...product, price: Number(product.price) }); // Ensure price is a number
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? Number(value) : value, 
    });
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="login-container">
      <h2>Edit Product</h2>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <input type="number" name="price" value={formData.price} onChange={handleChange} />
      <input type="text" name="category" value={formData.category} onChange={handleChange} />
      <input type="text" name="image" value={formData.image} onChange={handleChange} />
      <button className="cart-btn" onClick={() => mutation.mutate(formData)}>
        Update Product
      </button>
    </div>
  );
};

export default EditProduct;
