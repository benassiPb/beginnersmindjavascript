import React from "react";
import projectData from "./data/projectData";

function ProjectsSidebar(props) {
  const { currentProject, setCurrentProject } = props;

  const handleClick = (projectId) => {
    if (projectId !== currentProject) {
      setCurrentProject(projectId);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className="project-sidebar-container-2">
      {projectData.map((project) => (
        <div key={project.id}>
          <p
            className="project-sidebar-title"
            onClick={() => handleClick(project.id)}
          >
            {" "}
            » {project.subtitle}{" "}
            <span className="project-sidebar-tags">({project.stack})</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSidebar;
