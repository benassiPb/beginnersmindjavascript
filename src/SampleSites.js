import React from "react";
import coffeehero from "./images/coffeehero.png";
import ecocover from "./images/ecocover.png";
import yogahero from "./images/yogahero.png";
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
            <p className="sample-page-cover-title">coffee</p>
          </Link>
        </div>

        <div className="sample-page-cover-container">
          <div className="sample-page-cover-filter"></div>
          <Link to="/eco">
            <img src={ecocover} alt="eco" className="sample-page-cover-image" />
            <p className="sample-page-cover-title">eco</p>
          </Link>
        </div>

        <div className="sample-page-cover-container">
          <div className="sample-page-cover-filter"></div>
          <Link to="/professional">
            <img
              src={yogahero}
              alt="professional"
              className="sample-page-cover-image"
            />
            <p className="sample-page-cover-title">professional</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SampleSites;
