import React from "react";
import skills from "../../data/skills";
import SkillsItem from "../skills-item/skills-item.component";

const SkillsList = () => {
  return (
    <>
      {skills.map((skill, idx) => (
        <SkillsItem key={idx} {...skill} />
      ))}
    </>
  );
};

export default SkillsList;
