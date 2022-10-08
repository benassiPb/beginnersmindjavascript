import React from "react";
import backstoryData from "./data/backstoryData";

function AboutBackstory() {
  return (
    <div className="about-backstory-container">
      <div className="about-backstory-bio">
        <h2 className="about-subheader">
          <span className="about-dash">-</span>bio
          <span className="about-dash">-</span>
        </h2>
        <div className="about-paragraphs-container">
          <div className="about-paragraphs">
            <p className="about-paragraph about-bio-p">
              From the Chicago suburbs, now based in Los Angeles, my work has
              taken me all around the world. Prior to entering the world of web
              and software development, I worked for nearly a decade in
              environmental education, youth development, and international
              education. This path led me to meet and learn from incredible
              communities in India, Italy, New Zealand, Tanzania, Hawaii,
              Colorado and beyond. I am inspired by people who work to support
              the health of their communities and environments.{" "}
            </p>
            <p className="about-paragraph about-bio-p">
              In 2022, I committed to a career change to pursue web development
              and software engineering. Motivated by the creative and
              intellectual aspect of the work, and by the opportunity to make a
              positive impact through this new career path, I completed
              Fullstack Academy's 17-week web development bootcamp in July 2022.
              I am excited to explore this new chapter and forge new meaningful
              connections. Let's connect!
            </p>
          </div>
        </div>
      </div>
      <div className="about-backstory-work">
        <h2 className="about-subheader">
          <span className="about-dash">-</span>work experiences
          <span className="about-dash">-</span>
        </h2>
        {backstoryData.map((item) =>
          item.type === "work" ? (
            <div className="about-work-image-container" key={item.id}>
              <img
                src={item.imgUrl}
                alt={item.name}
                className="about-work-image"
              />
            </div>
          ) : null
        )}
      </div>
      <div className="about-backstory-volunteer">
        <h2 className="about-subheader">
          <span className="about-dash">-</span>volunteer experiences
          <span className="about-dash">-</span>
        </h2>

        {backstoryData.map((item) =>
          item.type === "volunteer" ? (
            <div className="about-work-image-container" key={item.id}>
              <img
                src={item.imgUrl}
                alt={item.name}
                className="about-work-image"
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default AboutBackstory;
