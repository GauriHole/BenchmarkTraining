import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import ViewUsers from "./pages/ViewUsers";
import AddUser from "./pages/AddUser";
import { useAuthStore } from "./store/authStore";
import { useThemeStore } from "./store/themeStore"; 
import "./App.css"; 

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const { theme } = useThemeStore(); 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router>
      {!isAdmin ? (
        <AdminLogin visible={modalVisible} onClose={() => setModalVisible(false)} />
      ) : (
        <div className={`app ${theme}`}>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<ViewUsers />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
