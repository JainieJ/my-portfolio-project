import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, color, input, ...otherProps }) => {
  const { link } = otherProps;
  const btnStyles = `btn btn--${color}`;
  return input ? (
    <input {...otherProps} className={btnStyles} />
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={btnStyles}
    >
      {children}
    </a>
  );
};

export default CustomButton;
