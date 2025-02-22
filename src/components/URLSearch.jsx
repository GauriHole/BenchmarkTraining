import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css"; 

const URLSearch = () => {
  const [, setURLSearch] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim()) {
      setURLSearch({ query: inputValue });
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter search text"
        className="input-box"
      />
      <button onClick={handleClick} className="button">
        Update URL
      </button>
    </div>
  );
};

export default URLSearch;
