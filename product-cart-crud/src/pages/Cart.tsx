import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/CartItem";
import EditModal from "../components/EditModal";
import "../App.css"; 

const Cart = () => {
  const { cart, editCartItem, removeFromCart } = useCartStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSaveEdit = (updatedItem) => {
    editCartItem(updatedItem);
    setIsModalOpen(false);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} onEdit={handleEdit} onRemove={removeFromCart} />
        ))
      )}
      
      <EditModal
        visible={isModalOpen}
        item={selectedItem}
        onSave={handleSaveEdit}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
