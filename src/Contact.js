import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9o3ohqy",
        "template_6hn45gg",
        form.current,
        "47Ib2n16C586Cl33f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="about-contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="about-contact-form">
        <label className="about-contact-label">Name</label>
        <input type="text" name="user_name" className="about-contact-input" />
        <label className="about-contact-label">Email</label>
        <input type="email" name="user_email" className="about-contact-input" />
        <label className="about-contact-label">Message</label>
        <textarea
          name="message"
          className="about-contact-input about-contact-message"
        />
        <div className="about-contact-submit-container">
          <input type="submit" value="Send" className="about-contact-submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
