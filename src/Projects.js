import React, { useState } from "react";
import FrontEndProjects from "./FrontEndProjects";
import FullStackProjects from "./FullStackProjects";

function Projects() {
  const [projectView, setProjectView] = useState("front");
  return (
    <div className="Project-page-container">
      <div>
        <div className="project-toggle-view">
          <div className="pointer" onClick={() => setProjectView("front")}>
            {projectView === "front" ? (
              <span className="padding-10 bold">front end</span>
            ) : (
              <span className={["padding-10"]}>front end</span>
            )}
          </div>
          <span className="padding-10">|</span>

          <div className="pointer" onClick={() => setProjectView("full")}>
            {projectView === "full" ? (
              <span className="padding-10 bold">full stack</span>
            ) : (
              <span className={["padding-10"]}>full stack</span>
            )}
          </div>
        </div>

        {projectView === "front" ? <FrontEndProjects /> : null}
        {projectView === "full" ? <FullStackProjects /> : null}
      </div>
    </div>
  );
}

export default Projects;
