import React from "react";
import "./navigation.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useToggle from "./../../hooks/useToggle";
import navLinks from "./../../data/navLinks";

const Navigation = () => {
  const [state, toggle, close] = useToggle(false);
  const backgroundShown = state ? "navigation__background-shown" : null;
  const navigationShown = state ? "navigation__nav-shown" : null;
  const icon = state ? "times" : "bars";
  return (
    <div className="navigation">
      <button className="navigation__button" onClick={toggle}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </button>
      <div class={`navigation__background ${backgroundShown}`}>&nbsp;</div>
      <nav class={`navigation__nav ${navigationShown}`}>
        <ul class="navigation__list">
          {navLinks.map(({ link, title, id }) => (
            <li class="navigation__item" key={id} onClick={close}>
              <a href={link} class="navigation__link">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
