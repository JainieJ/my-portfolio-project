import React from "react";
import "./skills-item.styles.scss";

const SkillsItem = ({ logo, text }) => {
  return (
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img src="img/nat-8.jpg" alt="lady in a boat" class="story__image" />
          <figcaption class="story__caption">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
