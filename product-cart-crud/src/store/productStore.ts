import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
  editProduct: (updatedProduct: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  editProduct: (updatedProduct) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    }));
  },
}));
