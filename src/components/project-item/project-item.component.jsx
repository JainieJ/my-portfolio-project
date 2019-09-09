import React from "react";
import "./project-item.styles.scss";
import TextButton from "../text-button/text-button.component";

const ProjectItem = ({ title, description, netlify, github }) => {
  return (
    <div className="row">
      <div className="project">
        <a
          href={netlify}
          target="_blank"
          rel="noopener noreferrer"
          className="project__title"
        >
          {title}
        </a>
        <p className="project__info">{description}</p>
        <div class="u-margin-top-sm">
          <TextButton link={github}>view code</TextButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
