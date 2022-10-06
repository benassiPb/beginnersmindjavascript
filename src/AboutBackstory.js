import React from "react";
import backstoryData from "./data/backstoryData";

function AboutBackstory() {
  return (
    <div>
      <div className="about-backstory-bio">
        <h2 className="about-subheader">bio</h2>
        <div className="about-paragraphs-container">
          <div className="about-paragraphs">
            <p className="about-paragraph">
              From the Chicago suburbs, my work has taken me all around the
              world. Prior to entering the world of web and software
              development, I worked for nearly a decade in environmental
              education, youth development, and international education. This
              path enabled me to meet and learn from incredible communities in
              India, Italy, New Zealand, Tanzania, Hawaii, Colorado and more. I
              am inspired by people who work to support the health of their
              communities and environments.{" "}
            </p>
            <p className="about-paragraph">
              In 2022, I committed to a career change to enter web development
              and software engineering. Motivated by the creative and
              intellectual challenge and by the opportunitiy to make a positive
              impact through this new career path, I completed Fullstack
              Academy's 17-week web development bootcamp in July 2022. I am
              excited to explore this new chapter and forge new meaningful
              connections.
            </p>
          </div>
        </div>
      </div>
      <div className="about-backstory-work">
        <h2 className="about-subheader">work experiences</h2>
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
        <h2 className="about-subheader">volunteer experiences</h2>

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