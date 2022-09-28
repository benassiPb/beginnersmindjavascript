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
          a blog on learning JavaScript, building healthy habits, and
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
          I spent nearly a decade working for international education,
          environmental, and youth development organizations, including spending
          extended periods of time as an educator in India, East Africa, New
          Zealand, Italy, Hawaii, and Colorado. In 2022, I transitioned out of
          international education and completed Fullstack Academy's software
          engineering bootcamp.
        </p>

        <p className="about-p">
          The purpose of this site is to share what I am learning, and provide
          some inspiration for other developers seeking ideas for projects. The
          main technical focus is on JavaScript and adjacent tools and
          technologies, but I also reflect on growth, challenges, change, and
          purpose.
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
