import React from "react";
import bmjlogo from "./images/bmjlogo.jpg";
import bitmoji from "./images/bitmoji.png";
import linkedIn from "./images/linkedin.png";
import ContactUs from "./Contact";

function About() {
  return (
    <div className="about-container">
      <div className="about-page">
        <nav className="about-word-titles">
          <a className="about-word-title" href="#welcome">
            welcome
          </a>
          <a className="about-word-title bold" href="#purpose">
            purpose
          </a>
          <a className="about-word-title" href="#values">
            values
          </a>
          <a className="about-word-title" href="#backstory">
            backstory
          </a>
          <a className="about-word-title bold" href="#philosophy">
            philosophy{" "}
          </a>
          <a className="about-word-title" href="#resources">
            resources
          </a>
          <a className="about-word-title bold" href="#contact">
            contact
          </a>
          <a className="about-word-title" href="#thanks">
            thanks
          </a>
        </nav>

        <div className="about-welcome-section about-section " id="welcome">
          <h2 className="about-headline">Welcome</h2>
        </div>
      </div>

      <div className="about-purpose-section about-section" id="purpose">
        <h2 className="about-headline">Purpose</h2>
      </div>

      <div className="about-values-section about-section" id="values">
        <h2 className="about-headline">Values</h2>
      </div>

      <div className="about-backstory-section about-section" id="backstory">
        <h2 className="about-headline">Backstory</h2>
        <div className="about-name-photo-container">
          <p className="about-p bold font-size-1-5rem cursive">Peter Benassi</p>
          <a
            href="https://www.linkedin.com/in/pb-benassi/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="about-link" src={linkedIn} alt="logo" />
          </a>
        </div>
      </div>

      <div className="about-philosophy-section about-section" id="philosophy">
        <h2 className="about-headline">Philosophy</h2>
      </div>

      <div className="about-resources-section about-section" id="resources">
        <h2 className="about-headline">Resources</h2>
      </div>

      <div className="about-contact-section about-section" id="contact">
        <h2 className="about-headline">Contact</h2>
        <ContactUs />
      </div>

      <div className="about-thanks-section about-section" id="thanks">
        <h2 className="about-headline">Thanks</h2>
      </div>
    </div>
  );
}

export default About;
