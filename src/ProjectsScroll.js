import React from "react";
import projectData from "./data/projectData";
import { useNavigate } from "react-router-dom";

function ProjectsScroll() {
  let navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="home-projects-container">
        {projectData.map((project) =>
          project.id >= projectData.length - 9 ? (
            <div
              onClick={() => navigate(`/projects/${project.id}`)}
              key={project.id}
            >
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

export default ProjectsScroll;
