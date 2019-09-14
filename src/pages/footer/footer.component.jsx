import React from "react";
import "./footer.styles.scss";
import IconAttribution from "../../components/icon-attribution/icon-attribution.component";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const linkText = language === "english" ? "go back" : "в начало";
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer__container">
          <IconAttribution />
          <a href="#header" className="footer__back-button">
            {linkText}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
