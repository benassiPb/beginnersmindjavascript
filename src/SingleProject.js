import React from "react";
import projectData from "./data/projectData";
import { FaTools, FaLightbulb, FaGithub, FaMarker } from "react-icons/fa";
import { useParams } from "react-router-dom";

function SingleProject() {
  let { projectId } = useParams();
  return (
    <div>
      {parseInt(projectId) <= projectData.length && parseInt(projectId) > 0 ? (
        projectData.map((project) =>
          project.id === parseInt(projectId) ? (
            <div key={project.id} className="stretch">
              <div className="project-title-container ">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="project-cover"
                />
              </div>

              <div className="project-description-container">
                <FaMarker size="2rem" className="flip" />
                <p className="single-project-header ">Description</p>
                <div className="project-description-text-container">
                  <p className="max-width-500 align-center">
                    {project.description}
                  </p>
                </div>
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
                    />
                  </div>
                ) : null}
              </div>

              <div className="project-stack-container">
                <FaTools size="2rem" className="flip" />
                <p className="single-project-header "> Tech Stack </p>
                <div className="project-stack-content-container">
                  <p className="font-size-2rem font-weight-200 project-stack">
                    {project.stack}
                  </p>
                </div>
              </div>

              <div className="project-repo-container">
                <FaGithub size="2rem" className="flip" />
                <p className="single-project-header">Repo</p>
                <p>{project.repo}</p>
              </div>

              <div className="project-takeaways-container">
                <FaLightbulb size="2rem" className="flip" />
                <p className="single-project-header">Key Takeaways</p>
                {project.takeaways.map((item, index) => (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )
      ) : (
        <h1 className="not-found">project not found</h1>
      )}
    </div>
  );
}

export default SingleProject;
