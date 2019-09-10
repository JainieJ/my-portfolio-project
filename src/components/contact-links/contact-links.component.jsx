import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact-links.styles.scss";

const ContactLinks = () => {
  return (
    <ul className="links">
      <li className="links__item">
        <a
          href="mailto:myaso@mya.com?Subject=Message%20from%20portfolio"
          rel="noopener noreferrer"
          target="_self"
        >
          <FontAwesomeIcon icon="envelope" size="lg" className="links__logo" />
          myaso@mya.com
        </a>
      </li>
      <li className="links__item">
        <a
          href="https://github.com/JainieJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="lg"
            className="links__logo"
          />
          github.com/JainieJ
        </a>
      </li>
      <li className="links__item">
        <a href="tel:+123456789">
          <FontAwesomeIcon icon="phone" size="lg" className="links__logo" />
          +123456789
        </a>
      </li>
    </ul>
  );
};

export default ContactLinks;
