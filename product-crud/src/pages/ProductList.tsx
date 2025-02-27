import React, { useEffect, useState } from "react";
import { Table, Button, Card, Space, message } from "antd";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../api/product";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    message.success("Product deleted successfully!");
    fetchProducts();
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price ($)", dataIndex: "price", key: "price" },
    {
      title: "Actions",
      render: (text: any, record: any) => (
        <Space>
          <Link to={`/edit/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Button danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card title="Product List" style={{ maxWidth: 800, margin: "20px auto" }}>
      <Link to="/add">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add Product
        </Button>
      </Link>
      <Table columns={columns} dataSource={products} rowKey="id" loading={loading} />
    </Card>
  );
};

export default ProductList;
