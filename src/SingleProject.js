import React from "react";
import projectData from "./data/projectData";
import { FaToolbox, FaLightbulb, FaGithub, FaMarker } from "react-icons/fa";
function SingleProject(props) {
  const { setCurrentProject, currentProject } = props;
  return (
    <div>
      {projectData.map((project) =>
        project.id === currentProject ? (
          <div key={project.id} className="stretch">
            <div className="project-title-container ">
              <h3 className="project-title font-size-3rem uppercase">
                {project.title}
              </h3>
            </div>

            <div className="project-gallery-container">
              {project.videoLink ? (
                <div className="project-video-container">
                  <iframe
                    width="560"
                    height="349"
                    src={project.videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : null}
            </div>

            <div className="project-description-container">
              <FaMarker size="2rem" />
              <p className="bold uppercase ">Description</p>
              <div className="project-description-text-container">
                <p className="max-width-500 align-center">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="project-stack-container">
              <FaToolbox size="2rem" />
              <p className="bold uppercase "> Tech Stack </p>
              <div className="project-stack-content-container">
                <p className="font-size-2rem font-weight-200 project-stack">
                  {project.stack}
                </p>
              </div>
            </div>

            <div className="project-repo-container">
              <FaGithub size="2rem" />
              <p className="bold  uppercase ">Repo</p>
              <p>{project.repo}</p>
            </div>

            <div className="project-takeaways-container">
              <FaLightbulb size="2rem" />
              <p className="bold uppercase ">Key Takeaways</p>
              {project.takeaways.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default SingleProject;
