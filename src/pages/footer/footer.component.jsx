import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer__container">
          <div className="footer__attribution">
            Icons made by&nbsp;
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik&nbsp;
            </a>
            from&nbsp;
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>
          </div>
          <a href="#header" className="footer__back-button">
            Go Back
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
