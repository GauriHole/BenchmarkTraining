import React from "react";
const About: React.FC = () => {
  return (
    <div> 
    <div className="about-container">
      <div className="about-image">
        <img src="\shop.gif" alt="About Us" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to ShopEasy! Your one-stop destination for amazing products.
          We strive to provide the best quality and variety at affordable prices.
        </p>
        <p>
          Our mission is to make online shopping a seamless and enjoyable
          experience for everyone. Happy Shopping! 🛍️
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
