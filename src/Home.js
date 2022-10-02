import React from "react";
import postData from "./data/postData";
import projectData from "./data/projectData";

function Home() {
  return (
    <div className="home-page">
      <div className="home-quote-container">
        <p className="home-quote-large-quotation">"</p>
        <div className="home-quote-body">
          <p className="home-quote-text">
            The <span className="bold">beginner's mind</span> is the mind of{" "}
            <span className="bold gold">compassion</span>. When our mind is
            compassionate, it is <span className="bold gold">boundless</span>."
          </p>
          <p className="home-quote-author">-Shunryu Suzuki</p>
        </div>
      </div>
      <h2 className="home-subheader-left">RECENT PROJECTS</h2>
      <div className="home-projects-container">
        {projectData.map((project) =>
          project.id >= projectData.length - 2 ? (
            <div key={project.id}>
              <img
                className="home-project-cover"
                src={project.cover}
                alt={project.title}
              />
            </div>
          ) : null
        )}
      </div>
      <h2 className="home-subheader-left">RECENT WRITING</h2>
      <div className="home-writing-container"></div>
      <h2 className="home-subheader-center">TESTIMONIALS</h2>

      <h2 className="home-subheader-center">CONNECT</h2>
    </div>
  );
}

export default Home;
