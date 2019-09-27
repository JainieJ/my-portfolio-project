import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useToggle from "./../../hooks/useToggle";
import { LanguageContext } from "../../contexts/LanguageProvider";
import navLinks from "./../../data/navLinks";
import "./navigation.styles.scss";

const Navigation = () => {
  const [state, toggle, close] = useToggle(false);
  const { language } = useContext(LanguageContext);
  const backgroundShown = state ? "navigation__background-shown" : null;
  const navigationShown = state ? "navigation__nav-shown" : null;
  const icon = state ? "times" : "bars";
  return (
    <div className="navigation">
      <button className="navigation__button" onClick={toggle}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </button>
      <div className={`navigation__background ${backgroundShown}`}>&nbsp;</div>
      <nav className={`navigation__nav ${navigationShown}`}>
        <ul className="navigation__list">
          {navLinks.map(({ link, title, id }) => (
            <li className="navigation__item" key={id} onClick={close}>
              <a href={link} className="navigation__link">
                {title[language]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
