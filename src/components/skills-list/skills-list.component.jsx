import React from "react";
import { useContext } from "react";
import SkillsItem from "../skills-item/skills-item.component";
import { skillsText } from "../../data/languages/skillsText";
import { LanguageContext } from "../../contexts/LanguageProvider";

const SkillsList = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {skillsText.map(({ logo, id, text, description }) => (
        <SkillsItem
          key={id}
          logo={logo}
          text={text[language]}
          description={description}
        />
      ))}
    </>
  );
};

export default SkillsList;
