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
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({ first_name: user.first_name, email: user.email });
    }
  }, [user]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    if (!validateEmail(email)) {
      setEmailError("❌ Please enter a valid email address.");
    } else {
      setEmailError(null);
    }
  };

  const handleSave = () => {
    if (!userId) return;
    
    if (emailError) {
      message.error("Invalid email. Please enter a valid email.");
      return;
    }

    console.log("Updating User:", userId, formData);
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
        onChange={handleEmailChange}
        style={{ marginTop: 10 }}
      />
      {emailError && <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>}

      <Button 
        type="primary" 
        onClick={handleSave} 
        style={{ marginTop: 15 }} 
        disabled={!!emailError} 
      >
        Save Changes
      </Button>
    </Modal>
  );
};

export default EditUser;
