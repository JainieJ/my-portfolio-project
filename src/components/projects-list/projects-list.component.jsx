import React from "react";
import projects from "./../../data/projects";
import ProjectItem from "../project-item/project-item.component";

const ProjectsList = () => {
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectItem key={idx} {...project} />
      ))}
    </>
  );
};

export default ProjectsList;
