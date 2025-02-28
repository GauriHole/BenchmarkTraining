import { Button, Modal } from "antd";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  onEdit: (item: any) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onEdit, onRemove }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <Button type="primary" onClick={() => onEdit(item)}>
          Edit
        </Button>
        <Button danger onClick={() => setIsConfirmOpen(true)}>
          Remove
        </Button>
      </div>

      <Modal
        open={isConfirmOpen} 
        title="Confirm Removal"
        onOk={() => {
          onRemove(item.id);
          setIsConfirmOpen(false);
        }}
        onCancel={() => setIsConfirmOpen(false)}
      >
        <p>Are you sure you want to remove this item?</p>
      </Modal>
    </div>
  );
};

export default CartItem;
