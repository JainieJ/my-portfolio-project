import React from "react";
import ContactInput from "../contact-input/contact-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { formText } from "../../data/languages/contactText";
import "./contact-form.styles.scss";

const ContactForm = ({ language }) => {
  const { name, email, message, send } = formText[language];
  return (
    <form
      action="https://formsubmit.co/zhenya.berseneva@gmail.com"
      method="POST"
      className="form"
    >
      <ContactInput type="text" name="name" placeholder={name} required />
      <ContactInput type="email" name="email" placeholder={email} required />
      <ContactInput
        name="text"
        cols="30"
        rows="10"
        placeholder={message}
        required
        textarea
      />
      <CustomButton type="submit" value={send} color="black" input />
    </form>
  );
};

export default ContactForm;
