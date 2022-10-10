import React from "react";
import coffeehero from "./images/coffeehero.png";
import { Link } from "react-router-dom";

function SampleSites() {
  return (
    <div className="sample-sites-page">
      <div>
        <h1 className="sample-page-title ">Sample Web Design Projects</h1>
        <div className="sample-page-cover-container">
          <div className="sample-page-cover-filter"></div>
          <Link to="/coffee">
            <img
              src={coffeehero}
              alt="coffeeshop"
              className="sample-page-cover-image"
            />
            <p className="sample-page-cover-title">Coffee</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SampleSites;
