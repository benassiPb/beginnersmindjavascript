import React, { useState } from "react";
import SingleProject from "./SingleProject";
import ProjectsSidebar from "./ProjectsSidebar";

function Projects() {
  const [currentProject, setCurrentProject] = useState(1);

  return (
    <div className="project-page-container">
      <ProjectsSidebar
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      />
      <div className="project-container">
        <SingleProject
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        />
      </div>
    </div>
  );
}

export default Projects;
