import React from "react";

function AboutWelcome() {
  return (
    <div>
      <div className="about-welcome-mission">
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
      <div className="about-welcome-values">
        <h2 className="about-subheader">
          <span className="about-dash">-</span>values
          <span className="about-dash">-</span>
        </h2>
        <div className="about-paragraphs">
          <p className="about-paragraph about-values-p">
            open mindful communication. sustainability. reliability. compassion.
            collaboration. transparency.
          </p>
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
