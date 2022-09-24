import React from "react";
import projectData from "./data/projectData";
import { FaToolbox, FaLightbulb } from "react-icons/fa";
function SingleProject(props) {
  const { setCurrentProject, currentProject } = props;
  return (
    <div>
      <div>
        {projectData.map((project) =>
          project.id === currentProject ? (
            <div>
              <div className="project-title-container font-size-3rem uppercase">
                <h3>{project.title}</h3>
              </div>

              <div className="project-stack-container">
                <FaToolbox size="2rem" />
                <p className="bold uppercase "> Tech Stack </p>
                <p className="font-size-2rem font-weight-200">
                  {project.stack}
                </p>
              </div>

              <div className="project-description-container">
                <FaLightbulb size="2rem" />
                <p className="bold  uppercase ">Description</p>
                <p>{project.description}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default SingleProject;
