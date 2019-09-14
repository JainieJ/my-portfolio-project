import React from "react";
import { useContext } from "react";
import { projectsTitle } from "./../../data/languages/projectsText";
import { LanguageContext } from "../../contexts/LanguageProvider";
import HeadingSecondary from "./../../components/heading-secondary/heading-secondary.component";
import ProjectsList from "../../components/projects-list/projects-list.component";
import "./projects.styles.scss";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="projects" id="projects">
      <div className="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>{projectsTitle[language]}</HeadingSecondary>
      </div>
      <ProjectsList />
    </section>
  );
};

export default Projects;
