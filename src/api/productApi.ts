import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const addProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const { data } = await axios.post("https://fakestoreapi.com/products", product);
  return { ...data, id: data.id ?? Math.floor(Math.random() * 1000) }; 
};

export const updateProduct = async (updatedProduct: Product): Promise<Product> => {
  const { data } = await axios.put(
    `https://fakestoreapi.com/products/${updatedProduct.id}`,
    updatedProduct
  );
  return data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`https://fakestoreapi.com/products/${id}`);
};
