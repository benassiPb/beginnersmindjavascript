import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const notifyError = () => toast.error("Uh oh. Something went wrong.");
  const notify = () => toast.success("Email sent!");

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
          notify();
        },
        (error) => {
          notifyError();
        }
      );

    handleSubmit();
  };

  const handleSubmit = () => {
    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const message = document.getElementById("form-message");
    name.value = "";
    email.value = "";
    message.value = "";
  };

  return (
    <div className="about-contact-form-container">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className="about-contact-form">
        <label className="about-contact-label">Name</label>
        <input
          type="text"
          name="user_name"
          className="about-contact-input"
          required={true}
          id="form-name"
        />
        <label className="about-contact-label">Email</label>
        <input
          type="email"
          name="user_email"
          className="about-contact-input"
          required={true}
          id="form-email"
        />
        <label className="about-contact-label">Message</label>
        <textarea
          name="message"
          className="about-contact-input about-contact-message"
          required={true}
          id="form-message"
        />
        <div className="about-contact-submit-container">
          <input type="submit" value="Send" className="about-contact-submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
