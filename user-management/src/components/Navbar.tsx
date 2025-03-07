import { useState } from "react";
import { Button, Modal, Input, message } from "antd";
import { useThemeStore } from "../store/themeStore";
import { useUserStore } from "../store/userStore";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { addUser, users } = useUserStore(); 

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({ first_name: "",last_name:"", email: "" });

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (!formData.first_name ||!formData.last_name|| !formData.email) {
      message.error("Please fill in all fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      message.error("Invalid email format!");
      return;
    }

    const newUser = {
      id: users.length + 1, 
      first_name: formData.first_name,
      last_name:formData.last_name,
      email: formData.email,
      avatar: "🧑",
    };

    addUser(newUser); 
    message.success("User added successfully!");
    setIsModalVisible(false);
    setFormData({ first_name: "",last_name:"", email: "" });
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: theme === "dark" ? "#333" : "#f8f9fa", color: theme === "dark" ? "white" : "black" }}>
      <h2>User Management</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={toggleTheme} type="primary">
          {theme === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </Button>

        <Button type="primary" onClick={showModal}>
          Add User
        </Button>
      </div>

      <Modal title="Add New User" open={isModalVisible} onCancel={handleCancel} footer={null}>
        <Input
          name="first_name"
          placeholder="Enter First Name"
          value={formData.first_name}
          onChange={handleChange}
          style={{ marginBottom: 10 }}
        />
        <Input
          name="last_name"
          placeholder="Enter Last Name"
          value={formData.last_name}
          onChange={handleChange}
          style={{ marginBottom: 10 }}
        />
        <Input
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleAddUser} style={{ marginTop: 15 }}>
          Add User
        </Button>
      </Modal>
    </nav>
  );
};

export default Navbar;
