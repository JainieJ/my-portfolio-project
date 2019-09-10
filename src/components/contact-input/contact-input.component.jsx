import React from "react";
import "./contact-input.styles.scss";

const ContactInput = ({ inputType, ...otherProps }) => {
  return inputType === "input" ? (
    <input className="contact-input" {...otherProps} value="" />
  ) : (
    <textarea className="contact-input" {...otherProps} value=""></textarea>
  );
};

export default ContactInput;
