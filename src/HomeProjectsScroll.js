import React from "react";
import projectData from "./data/projectData";

function HomeProjectsScroll() {
  return (
    <div>
      {" "}
      <div className="home-projects-container">
        {projectData.map((project) =>
          project.id >= projectData.length - 9 ? (
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
    </div>
  );
}

export default HomeProjectsScroll;
