import React from "react";
import TextButton from "../text-button/text-button.component";
import "./project-item.styles.scss";

const ProjectItem = ({ title, description, netlify, github, button }) => {
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
        <p
          className="project__info"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="u-margin-top-sm">
          <TextButton link={github}>{button}</TextButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
