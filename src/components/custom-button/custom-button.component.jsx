import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, color, input, ...otherProps }) => {
  const btnStyles = `btn btn--${color}`;
  return input ? (
    <input {...otherProps} className={btnStyles} />
  ) : (
    <a href="#" className={btnStyles}>
      {children}
    </a>
  );
};

export default CustomButton;
