import React from "react";
import bmjlogo from "./images/bmjlogo.jpg";
import bitmoji from "./images/bitmoji.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-page">
        <img
          className="stones-image"
          src={bmjlogo}
          alt="pile of stacked stones"
        />
        <h2>Welcome</h2>

        <p className="about-p">
          A little background: I spent nearly a decade working for international
          education, environmental, and youth development organizations,
          including spending extended periods of time as an educator in India,
          East Africa, New Zealand, Italy, Hawaii, and Colorado.
        </p>
        <p className="about-p">
          In 2022, I transitioned out of international education and completed
          Fullstack Academy's software engineering bootcamp.{" "}
        </p>

        <p className="about-p">
          What drew me into tech was the vision of a career that was creative,
          collaborative, intellectually engaging, culturally important and
          impactful, and full of new and constantly evolving opportunities.
        </p>

        <p className="about-p">
          The purpose of this site is to share what I am learning, and provide
          some inspiration for other developers seeking ideas for projects. The
          main technical focus is on JavaScript and adjacent tools and
          technologies, but I also reflect on growth, challenges, change, and
          purpose.
        </p>
        <p className="about-p">
          Here's to the endless journey and always growing mountain ahead.
        </p>
        <p className="about-p">Thanks for stopping by,</p>
        <div className="about-name-photo-container">
          <p className="about-p bold">Peter Benassi</p>
          <img
            className="pb-image"
            src={bitmoji}
            alt="pile of stacked stones"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
