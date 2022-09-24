import React from "react";
import projectData from "./data/projectData";

function SingleProject(props) {
  const { setCurrentProject, currentProject } = props;
  return (
    <div>
      <div>
        {projectData.map((project) =>
          project.id === currentProject ? (
            <div>
              <h3>{project.title}</h3>
              <p className="">
                <span className="bold point-8-rem uppercase">Tech Stack: </span>
                {project.stack}
              </p>
              <p>
                <span className="bold point-8-rem uppercase">
                  Description:{" "}
                </span>
                {project.description}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default SingleProject;
