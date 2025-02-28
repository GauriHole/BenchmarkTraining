import { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import ProductCard from "./ProductCard";
import EditModal from "./EditModal";
import "../App.css";

const ProductList = () => {
  const { products, fetchProducts, editProduct } = useProductStore();
  const { addToCart } = useCartStore();
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct) => {
    editProduct(updatedProduct);
    setEditingProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={() => handleEdit(product)}
          onDelete={() => console.log("Delete Product:", product.id)}
          onAddToCart={() => handleAddToCart(product)} 
        />
      ))}

      {editingProduct && (
        <EditModal
          visible={true}
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
