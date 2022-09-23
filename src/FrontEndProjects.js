import React from "react";
import frontEndProjectData from "./frontEndProjectData";

function FrontEndProjects() {
  return (
    <div>
      <div className="projects-container">
        {frontEndProjectData.map((post) => {
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

export default FrontEndProjects;
