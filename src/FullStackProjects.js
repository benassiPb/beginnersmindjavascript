import React from "react";
import sampleProjectData from "./projectData";

function FullStackProjects() {
  return (
    <div>
      <div className="projects-container">
        {sampleProjectData.map((post) => {
          return (
            <div className="project-container">
              <h3>{post.title}</h3>
              <p>{post.stack}</p>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FullStackProjects;
