import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { projects } from "../../data/languages/projectsText";
import { buttonText } from "../../data/languages/projectsText";
import ProjectItem from "../project-item/project-item.component";

const ProjectsList = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {projects.map(({ id, description, ...rest }) => (
        <ProjectItem
          key={id}
          description={description[language]}
          button={buttonText[language]}
          {...rest}
        />
      ))}
    </>
  );
};

export default ProjectsList;
