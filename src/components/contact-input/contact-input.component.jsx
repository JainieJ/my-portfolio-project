import React from "react";
import "./contact-input.styles.scss";
import useInput from "./../../hooks/useInput";

const ContactInput = ({ textarea, ...otherProps }) => {
  const [value, handleChange] = useInput("");
  return textarea ? (
    <textarea
      className="contact-input"
      {...otherProps}
      value={value}
      onChange={handleChange}
    ></textarea>
  ) : (
    <input
      className="contact-input"
      {...otherProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export default ContactInput;
