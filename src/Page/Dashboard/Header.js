import React from "react";
const inlineStyle = {
  marginTop: "30px",
  marginBottom: "18px",
};

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>Employee Management System</h1>
      {
        <button
          style={inlineStyle}
          onClick={() => setIsAdding(true)}
          className="round-button"
        >
          Add Employee
        </button>
      }
    </header>
  );
};

export default Header;
