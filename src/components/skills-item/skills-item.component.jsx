import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skills-item.styles.scss";

const SkillsItem = ({ logo, text }) => {
  return (
    <div class="row">
      <div class="skill">
        <figure className="skill__logo-container">
          <FontAwesomeIcon icon={["fab", `${logo}`]} size="6x" />
          <figcaption className="skill__caption">{logo}</figcaption>
        </figure>
        <div class="skill__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
