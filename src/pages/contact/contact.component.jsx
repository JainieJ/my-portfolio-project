import React from "react";
import { useContext } from "react";
import { contactHeading } from "./../../data/languages/contactText";
import { LanguageContext } from "../../contexts/LanguageProvider";
import HeadingSecondary from "./../../components/heading-secondary/heading-secondary.component";
import ContactLinks from "../../components/contact-links/contact-links.component";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact.styles.scss";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const heading = contactHeading[language];
  return (
    <section className="contact" id="contact">
      <div className="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>{heading}</HeadingSecondary>
      </div>
      <div className="row">
        <div className="contact__container">
          <ContactLinks />
          <ContactForm language={language} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
