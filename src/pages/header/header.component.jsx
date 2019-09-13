import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./header.styles.scss";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import HeaderFlag from "./../../components/header-flag/header-flag.component";

const Header = () => {
  const { language } = useContext(LanguageContext);
  return (
    <header className="header" id="header">
      <div className="header__language-box">
        <HeaderFlag className="header__flag" />
      </div>
      <div className="header__text-box">
        <h1 className="u-margin-bottom-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          minima illo, natus expedita cupiditate minus!
        </h1>
        <CustomButton color="white">Download CV</CustomButton>
      </div>
    </header>
  );
};

export default Header;
