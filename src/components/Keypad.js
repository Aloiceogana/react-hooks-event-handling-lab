// Code Keypad Component Here
import React from "react";

const Keypad = () => {
  const handleInputChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleInputChange} />
    </div>
  );
};

export default Keypad;
