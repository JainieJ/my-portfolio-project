import React from "react";
import "./contact-form.styles.scss";
import ContactInput from "../contact-input/contact-input.component";
import TextButton from "../text-button/text-button.component";
import CustomButton from "./../custom-button/custom-button.component";

const ContactForm = () => {
  return (
    <form className="form">
      <ContactInput
        type="text"
        name="name"
        placeholder="name"
        required
        inputType="input"
      />
      <ContactInput
        type="email"
        name="_replyto"
        placeholder="email"
        required
        inputType="input"
      />
      <ContactInput
        name="text"
        cols="30"
        rows="10"
        placeholder="message"
        required
        inputType="textarea"
      />
      <CustomButton type="submit" value="Send" color="black" input />
    </form>
  );
};

export default ContactForm;
