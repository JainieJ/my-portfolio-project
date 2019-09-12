import React from "react";
import "./contact.styles.scss";
import HeadingSecondary from "./../../components/heading-secondary/heading-secondary.component";
import ContactLinks from "../../components/contact-links/contact-links.component";
import ContactForm from "../../components/contact-form/contact-form.component";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="u-center-text u-margin-bottom-lg">
        <HeadingSecondary>Contacts</HeadingSecondary>
      </div>
      <div className="row">
        <div className="contact__container">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
