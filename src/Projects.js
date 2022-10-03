import React, { useState } from "react";
import SingleProject from "./SingleProject";
import ProjectsSidebar from "./ProjectsSidebar";
import ProjectsScroll from "./ProjectsScroll";

function Projects() {
  return (
    <div className="project-page-container">
      <ProjectsSidebar />
      <div className="project-container">
        <SingleProject />
        <div className="single-project-scroll">
          <ProjectsScroll />
        </div>
      </div>
    </div>
  );
}

export default Projects;
