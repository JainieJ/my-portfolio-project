import React from "react";
import "./text-button.styles.scss";

const TextButton = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-text"
    >
      {`${children}`} &rarr;
    </a>
  );
};

export default TextButton;
