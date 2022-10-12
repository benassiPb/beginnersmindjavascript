import React from "react";
import { Link } from "react-router-dom";
import projectcover1 from "./images/projectcover1.png";
import projectcover2 from "./images/projectcover2.png";
import projectcover3 from "./images/projectcover3.png";

function ProjectsList() {
  return (
    <div className="sample-page-covers-container">
      <div className="sample-page-cover-container">
        <Link to="/projects/1">
          <img
            src={projectcover1}
            alt="coffeeshop"
            className="sample-page-cover-image"
          />
        </Link>
        <div className="sample-page-cover-description">
          <Link>
            <h3 className="projects-list-name">HappiList</h3>
          </Link>
          <p>
            HappiList was a capstone project completed during Fullstack
            Academy's 17-week coding bootcamp. It is a wellness and
            photo-sharing mobile app developed for iOS and Android with React
            Native.
          </p>
        </div>
      </div>

      <div className="sample-page-cover-container">
        <Link to="/projects/2">
          <img
            src={projectcover2}
            alt="eco"
            className="sample-page-cover-image"
          />
        </Link>
        <div className="sample-page-cover-description">
          <Link to="/projects/2">
            <h3 className="projects-list-name">Grace's Greens</h3>
          </Link>
          <p>
            Grace's Greens is an e-commerce plant buying website developed from
            scratch using React, Express, Node, Redux, and PostgreSQL.
          </p>
        </div>
      </div>

      <div className="sample-page-cover-container">
        <Link to="/projects/3">
          <img
            src={projectcover3}
            alt="eco"
            className="sample-page-cover-image"
          />
        </Link>
        <div className="sample-page-cover-description">
          <Link to="/projects/3">
            <h3 className="projects-list-name">Developer Portfolio</h3>
          </Link>
          <p>
            A professional style portfolio website built with React and
            TailwindCSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
