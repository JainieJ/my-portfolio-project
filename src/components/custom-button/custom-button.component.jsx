import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, color }) => {
  const btnStyles = `btn btn--${color}`;
  return (
    <a href="#" className={btnStyles}>
      {children}
    </a>
  );
};

export default CustomButton;
