import React from "react";
import ContactInput from "../contact-input/contact-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import "./contact-form.styles.scss";

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/mya@mur.com"
      method="POST"
      className="form"
    >
      <ContactInput type="text" name="name" placeholder="NAME" required />
      <ContactInput type="email" name="email" placeholder="EMAIL" required />
      <ContactInput
        name="text"
        cols="30"
        rows="10"
        placeholder="MESSAGE"
        required
        textarea
      />
      <CustomButton type="submit" value="Send" color="black" input />
    </form>
  );
};

export default ContactForm;
