import React from "react";
import projectData from "./data/projectData";
import { useNavigate } from "react-router-dom";

function ProjectsSidebar() {
  let navigate = useNavigate();

  return (
    <div className="project-sidebar-container">
      <h2 className="project-sidebar-header">Projects</h2>
      {projectData.map((project) => (
        <div key={project.id} className="project-sidebar-list">
          <div onClick={() => navigate(`/projects/${project.id}`)}>
            <p className="project-sidebar-title">
              {" "}
              » {project.subtitle}{" "}
              <span className="project-sidebar-tags">{project.stack}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSidebar;
