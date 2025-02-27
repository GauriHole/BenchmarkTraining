import React, { useEffect, useState } from "react";
import { Card, Spin } from "antd";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id!).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return loading ? (
    <Spin style={{ display: "block", margin: "20px auto" }} />
  ) : (
    <Card title={product.title} style={{ maxWidth: 500, margin: "20px auto" }}>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </Card>
  );
};

export default ProductDetails;
