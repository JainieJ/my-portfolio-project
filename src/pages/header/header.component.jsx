import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import CustomButton from "../../components/custom-button/custom-button.component";
import HeaderFlag from "./../../components/header-flag/header-flag.component";
import headerText from "./../../data/languages/headerText";
import "./header.styles.scss";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { about, button } = headerText[language];
  return (
    <header className="header" id="header">
      <div className="header__language-box">
        <HeaderFlag className="header__flag" />
      </div>
      <div className="header__text-box">
        <h1 className="u-margin-bottom-md">{about}</h1>
        <CustomButton color="white">{button}</CustomButton>
      </div>
    </header>
  );
};

export default Header;
