import { useEffect, useState } from "react";
import { Modal, Input, Button } from "antd";

const EditModal = ({ visible, item, onSave, onCancel }) => {
  const [editedItem, setEditedItem] = useState(item || { title: "", price: "" });

  useEffect(() => {
    if (item) {
      setEditedItem(item);
    }
  }, [item]);

  if (!item) return null; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal open={visible} title="Edit Item" onCancel={onCancel} footer={null}>
      <Input
        name="title"
        value={editedItem.title}
        onChange={handleChange}
        placeholder="Title"
        style={{ marginBottom: 10 }}
      />
      <Input
        name="price"
        type="number"
        value={editedItem.price}
        onChange={handleChange}
        placeholder="Price"
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={() => onSave(editedItem)}>
        Save
      </Button>
    </Modal>
  );
};

export default EditModal;
