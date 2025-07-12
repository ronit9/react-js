import React from "react";
import "./button.css";
const LoginButton = () => {
  return (
    <div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text" style={{ color: "#4F4C8F" }}>login</span>
      </button>
    </div>
  );
};

export default LoginButton;
