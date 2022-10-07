import React, { useState } from "react";
import SingleProject from "./SingleProject";
import ProjectsScroll from "./ProjectsScroll";

function Projects(props) {
  let { nav } = props;
  return (
    <div>
      {nav ? null : (
        <div className="project-page-container">
          <div className="project-container">
            <SingleProject />
            <div className="single-project-scroll">
              <ProjectsScroll />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
