import { Modal, Input, Button, message } from "antd";
import { useState, useEffect } from "react";
import { useUserStore } from "../store/userStore";

interface EditUserProps {
  visible: boolean;
  onClose: () => void;
  userId: number | null;
}

const EditUser = ({ visible, onClose, userId }: EditUserProps) => {
  const { users, updateUser } = useUserStore();
  const user = users.find((u) => u.id === userId);

  const [formData, setFormData] = useState({ first_name: "", email: "" });

  useEffect(() => {
    if (user) {
      setFormData({ first_name: user.first_name, email: user.email });
    }
  }, [user]);

  const handleSave = () => {
    if (!userId) return;

    updateUser(userId, formData);
    message.success("User updated successfully!");
    onClose();
  };

  return (
    <Modal title="Edit User" open={visible} onCancel={onClose} footer={null}>
      <Input
        placeholder="Name"
        value={formData.first_name}
        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
      />
      <Input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={{ marginTop: 10 }}
      />
      <Button type="primary" onClick={handleSave} style={{ marginTop: 15 }}>
        Save Changes
      </Button>
    </Modal>
  );
};

export default EditUser;
