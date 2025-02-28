import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import CartItem from "./CartItem";
import EditModal from "./EditModal"; 

const CartList = () => {
  const { cartItems, editCartItem } = useCartStore();
  const [editingCartItem, setEditingCartItem] = useState(null);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onEdit={() => setEditingCartItem(item)}           />
        ))
      )}

      {editingCartItem && (
        <EditModal
          visible={!!editingCartItem}
          product={editingCartItem}
          onSave={(updatedItem) => {
            editCartItem(updatedItem);
            setEditingCartItem(null);
          }}
          onCancel={() => setEditingCartItem(null)}
        />
      )}
    </div>
  );
};

export default CartList;
