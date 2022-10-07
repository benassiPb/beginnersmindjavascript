import React from "react";
import bmjlogo from "./images/bmjlogo.jpg";
import bitmoji from "./images/bitmoji.png";
import linkedIn from "./images/linkedin.png";
import Contact from "./Contact";
import AboutWelcome from "./AboutWelcome";
import AboutBackstory from "./AboutBackstory";
import HomeQuote from "./HomeQuote";
import AboutHero from "./AboutHero";

function About() {
  return (
    <div className="about-container">
      <div className="about-page">
        <AboutHero />
        <nav className="about-word-titles">
          <a className="about-word-title" href="#welcome">
            welcome
          </a>

          <a className="about-word-title " href="#backstory">
            backstory
          </a>

          <a className="about-word-title " href="#contact">
            contact
          </a>
        </nav>

        <div></div>

        <div className="about-welcome-section about-section " id="welcome">
          <h2 className="about-headline">Welcome</h2>

          <AboutWelcome />
        </div>
      </div>

      <div className="about-backstory-section about-section" id="backstory">
        <h2 className="about-headline ">Backstory</h2>
        <AboutBackstory />
      </div>

      <div className="about-contact-section about-section" id="contact">
        <h2 className="about-headline">Contact</h2>
        <div className="about-paragraphs-container">
          <div className="about-paragraphs">
            <p className="about-paragraph">
              Want to connect? Send an email to benassipb@gmail.com, submit an
              email using the form below, or click on the icon after my name
              below to connect on LinkedIn.
            </p>
          </div>
        </div>
        <Contact />
      </div>

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
  );
}

export default About;
