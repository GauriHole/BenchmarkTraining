import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import ViewUsers from "./pages/ViewUsers";
import AddUser from "./pages/AddUser";
import { useAuthStore } from "./store/authStore";

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const isAdmin = useAuthStore((state) => state.isAdmin);

  return (
    <Router>
      {!isAdmin ? (
        <AdminLogin visible={modalVisible} onClose={() => setModalVisible(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ViewUsers />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
