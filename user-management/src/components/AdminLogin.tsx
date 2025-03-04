import { Modal, Input, Button, message } from "antd";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const AdminLogin = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    if (login(username, password)) {
      message.success("Login successful!");
      onClose();
    } else {
      message.error("Invalid credentials!");
    }
  };

  return (
    <Modal title="Admin Login" open={visible} footer={null} closable={false}>
      <Input placeholder="Admin Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input.Password placeholder="Admin Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: 10 }} />
      <Button type="primary" onClick={handleLogin} style={{ marginTop: 15, width: "100%" }}>
        Login
      </Button>
    </Modal>
  );
};

export default AdminLogin;
