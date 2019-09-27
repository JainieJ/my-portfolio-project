import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skills-item.styles.scss";

const SkillsItem = ({ logo, text, description }) => {
  return (
    <div className="row">
      <div className="skill">
        <figure className="skill__logo-container">
          <FontAwesomeIcon icon={["fab", `${logo}`]} size="6x" />
          <figcaption className="skill__caption">{description}</figcaption>
        </figure>
        <div className="skill__text">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
