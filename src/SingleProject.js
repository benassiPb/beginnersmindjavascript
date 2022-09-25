import React from "react";
import projectData from "./data/projectData";
import { FaToolbox, FaLightbulb, FaGithub } from "react-icons/fa";
function SingleProject(props) {
  const { setCurrentProject, currentProject } = props;
  return (
    <div>
      {projectData.map((project) =>
        project.id === currentProject ? (
          <div>
            <div className="project-title-container font-size-3rem uppercase">
              <h3>{project.title}</h3>
              <h4 className="font-weight-100">{project.subtitle}</h4>
            </div>

            <div className="project-stack-container">
              <FaToolbox size="2rem" />
              <p className="bold uppercase "> Tech Stack </p>
              <p className="font-size-2rem font-weight-200">{project.stack}</p>
            </div>

            <div className="project-description-container">
              <FaLightbulb size="2rem" />
              <p className="bold  uppercase ">Description</p>
              <p>{project.description}</p>
            </div>

            <div className="project-link-container">
              <p className="bold  uppercase ">Gallery</p>
              <p>{project.image}</p>
              {/* {project.videoLink ? (
                <iframe
                  width="392"
                  height="220"
                  src={project.videoLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : null} */}
            </div>

            <div className="project-description-container">
              <FaGithub size="2rem" />
              <p className="bold  uppercase ">Repo</p>
              <p>{project.repo}</p>
            </div>

            <div className="project-link-container">
              <FaLightbulb size="2rem" />
              <p className="bold  uppercase ">Key Takeaways</p>
              {project.takeaways.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default SingleProject;
