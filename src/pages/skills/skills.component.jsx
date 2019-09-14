import React from "react";
import { useContext } from "react";
import HeadingSecondary from "../../components/heading-secondary/heading-secondary.component";
import SkillsList from "../../components/skills-list/skills-list.component";
import { headingText } from "./../../data/languages/skillsText";
import { LanguageContext } from "../../contexts/LanguageProvider";
import "./skills.styles.scss";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="skills" id="skills">
      <div className="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>{headingText[language]}</HeadingSecondary>
      </div>
      <SkillsList />
    </section>
  );
};

export default Skills;
