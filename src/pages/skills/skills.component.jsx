import React from "react";
import "./skills.styles.scss";
import HeadingSecondary from "../../components/heading-secondary/heading-secondary.component";
import SkillsList from "../../components/skills-list/skills-list.component";

const Skills = () => {
  return (
    <section className="skills">
      <div class="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>My Skills</HeadingSecondary>
      </div>
      <SkillsList />
    </section>
  );
};

export default Skills;
