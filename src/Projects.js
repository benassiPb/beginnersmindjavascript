import React, { useState } from "react";
import SingleProject from "./SingleProject";
import ProjectsSidebar from "./ProjectsSidebar";

function Projects() {
  const [projectView, setProjectView] = useState("front");
  const [currentProject, setCurrentProject] = useState(1);

  return (
    <div className="project-page-container">
      <div className="project-sidebar-container">
        <h2 className="project-sidebar-header">Projects</h2>
        <ProjectsSidebar setCurrentProject={setCurrentProject} />
      </div>

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
