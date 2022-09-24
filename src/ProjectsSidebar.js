import React from "react";
import projectData from "./data/projectData";

function ProjectsSidebar(props) {
  const { setCurrentProject } = props;

  const handleClick = (projectId) => {
    setCurrentProject(projectId);
  };
  return (
    <div>
      {projectData.map((project) => (
        <div>
          <p
            className="project-sidebar-title"
            onClick={() => handleClick(project.id)}
          >
            {" "}
            {project.subtitle}{" "}
            <span className="project-sidebar-tags">({project.stack})</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSidebar;
