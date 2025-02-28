import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <nav style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "10px" }}>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>
        <a href="/home" style={{ margin: "0 10px" }}>Products</a>
        <a href="/cart" style={{ margin: "0 10px" }}>Cart</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
