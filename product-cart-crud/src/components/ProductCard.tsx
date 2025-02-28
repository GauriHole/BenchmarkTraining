import { Card, Button } from "antd";
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  onEdit: () => void;
  onDelete: (id: number) => void;
  onAddToCart?: () => void; // Optional prop
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete, onAddToCart }) => {
  return (
    <Card
      className="product-card"
      cover={<img alt={product.title} src={product.image} className="product-image" />}
    >
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">Price: ${product.price}</p>

      <div className="product-actions">
        <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>
          Edit
        </Button>
        <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(product.id)}>
          Delete
        </Button>
        <Button icon={<ShoppingCartOutlined />} onClick={() => onAddToCart?.()}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
