import React from "react";
import bmjlogo from "./images/bmjlogo.jpg";
import bitmoji from "./images/bitmoji.png";
import linkedIn from "./images/linkedin.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-page">
        <h2 className="font-size-4rem playfair">Welcome</h2>
        <p className="font-size-1-5rem font-weight-200">
          a blog on learning JavaScript, building meaningful projects, and
          programming with purpose
        </p>
        <img className="pb-image" src={bitmoji} alt="author" />
        <div>
          <a
            href="https://www.linkedin.com/in/pb-benassi/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="connect-image padding-left-10 "
              src={linkedIn}
              alt="logo"
            />
          </a>
        </div>
      </div>

      <div className="about-body">
        <p className="about-p">
          "The beginner's mind is the mind of compassion. When our mind is
          compassionate, it is boundless."
        </p>
        <p className="about-p bold">Shunryu Suzuki</p>
        <p className="about-p">
          After working for ten years in environmental education, international
          education, and youth development, I began learning to code.
        </p>

        <p className="about-p">
          I now work on websites, apps, front-end design, and cloud development.
        </p>
        <p className="about-p">
          Everyday, there is something to begin or revisit with beginner's eyes.
          Never stop beginning.
        </p>

        <p className="about-p">Thanks for stopping by,</p>

        <div className="about-name-photo-container">
          <div>
            <p className="about-p bold font-size-1-5rem cursive">
              Peter Benassi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
