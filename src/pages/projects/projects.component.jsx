import React from "react";
import "./projects.styles.scss";
import HeadingSecondary from "./../../components/heading-secondary/heading-secondary.component";
import ProjectsList from "../../components/projects-list/projects-list.component";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>My Projects</HeadingSecondary>
      </div>
      <ProjectsList />
    </section>
  );
};

export default Projects;
