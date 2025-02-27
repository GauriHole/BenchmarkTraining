import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, updateProduct, getProductById } from "../api/product";

const ProductForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => form.setFieldsValue(data));
    }
  }, [id, form]);

  const onFinish = async (values: any) => {
    setLoading(true);
    if (id) {
      await updateProduct(id, values);
      message.success("Product updated successfully!");
    } else {
      await addProduct(values);
      message.success("Product added successfully!");
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <Card title={id ? "Edit Product" : "Add Product"} style={{ maxWidth: 500, margin: "20px auto" }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price ($)" rules={[{ required: true, message: "Please enter a price" }]}>
          <Input type="number" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default ProductForm;
