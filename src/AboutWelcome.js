import React from "react";
import video from "./images/valuebackpack.mp4";
import compass from "./images/compass.png";

function AboutWelcome() {
  return (
    <div>
      <div className="about-welcome-mission">
        <div className="about-welcome-mission-text-container">
          <h2 className="about-subheader">
            <span className="about-dash">-</span>mission
            <span className="about-dash">-</span>
          </h2>

          <div className="about-paragraphs">
            <p className="about-paragraph about-mission-p">
              To design and develop well-crafted interactive web and software
              applications using the best current practices in reliability,
              security, and design.
            </p>
          </div>
        </div>
        {/* <img src={compass} alt="compass" className="about-compass" /> */}
      </div>
      <div className="about-welcome-values">
        <div className="values-container">
          <video autoPlay loop muted playsInline className="values-video">
            <source src={video} type="video/mp4"></source>
          </video>
          <div className="about-values-text-container">
            <h2 className="about-subheader">
              <span className="about-dash">-</span>values
              <span className="about-dash">-</span>
            </h2>
            <div className="">
              <p className=" about-paragraphs about-paragraph about-values-p">
                open mindful communication. sustainability. reliability.
                collaboration. transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-welcome-skills">
        <h2 className="about-subheader about-skills">
          <span className="about-dash">-</span>skills
          <span className="about-dash">-</span>
        </h2>
        <div className="about-skills-container">
          <div>
            <p>HTML</p>
          </div>
          <div>
            <p>CSS</p>
          </div>
          <div>
            <p>JavaScript</p>
          </div>
          <div>
            <p>Express</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Node</p>
          </div>
          <div>
            <p>Redux</p>
          </div>
          <div>
            <p>AWS</p>
          </div>
          <div>
            <p>PostgreSQL</p>
          </div>
          <div>
            <p>React Native</p>
          </div>
          <div>
            <p>Adobe Premiere</p>
          </div>
          <div>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcome;
