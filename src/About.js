import React from "react";
import bmjlogo from "./images/bmjlogo.jpg";
import bitmoji from "./images/bitmoji.png";
import linkedIn from "./images/linkedin.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-page">
        <h2 className="about-welcome">Welcome</h2>
        <p className="about-tagline ">
          a blog on learning JavaScript, building meaningful projects, and
          programming with purpose
        </p>
      </div>

      <div className="about-body">
        <p className="about-p">
          After working for ten years in environmental education, international
          education, and youth development, I began learning to code.
        </p>

        <p className="about-p">
          I now work on websites, apps, front-end design, and cloud development.
        </p>

        <p className="about-p">Thanks for stopping by,</p>

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
    </div>
  );
}

export default About;
