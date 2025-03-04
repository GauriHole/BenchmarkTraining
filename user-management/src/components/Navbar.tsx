import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to Login Modal
  };

  const menuItems = [
    { key: "view", label: "View Users", onClick: () => navigate("/") },
    { key: "add", label: "Add User", onClick: () => navigate("/add-user") },
    { key: "logout", label: "Logout", onClick: handleLogout },
  ];

  return <Menu mode="horizontal" items={menuItems} />;
};

export default Navbar;
