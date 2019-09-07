import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { ReactComponent as BritishFlag } from "../../img/united-kingdom.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__language-box">
        <BritishFlag className="header__flag" />
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
