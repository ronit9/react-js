import React from "react";
import "./button.css";
const Signin = () => {
  return (
    <div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text" style={{ color: "#4F4C8F" }}  >Register</span>
      </button>
    </div>
  );
};

export default Signin;
