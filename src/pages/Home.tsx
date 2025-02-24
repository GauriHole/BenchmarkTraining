import React from "react";
import About from "./About";
import Product from "../components/Products";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <About />
      <Product />
      <Footer />
    </>
  );
};

export default Home;
