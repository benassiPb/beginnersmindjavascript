import React from "react";
import { Link } from "react-router-dom";
import postcover1 from "./images/postcover1.png";
import postsData from "./data/postData";

function HomePosts() {
  return (
    <div className="sample-page-covers-container">
      <div className="sample-page-cover-container">
        <Link to="/posts/1">
          <img
            src={postcover1}
            alt="bootcamp"
            className="sample-page-cover-image"
          />
        </Link>
        <div className="sample-page-cover-description">
          <Link>
            <h3 className="projects-list-name">{postsData[0]["title"]}</h3>
          </Link>
          <p>{postsData[0]["sectionOneContent"][0]}...</p>
        </div>
      </div>
    </div>
  );
}

export default HomePosts;
