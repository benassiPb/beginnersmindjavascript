import React from "react";
import samplePostsData from "./data/postData";

function PostsGrid() {
  return (
    <div className="grid-page-container">
      <div className="healthy-posts-container">
        <div className="healthy-title-container">
          <p className=" posts-title">Healthy Habits</p>
        </div>
        <div className="healthy-content-container">
          <ul className=" posts-title-list">
            <li>patience, patterns, purpose</li>
            <li>takeaways from a 500+ hour bootcamp</li>
          </ul>
        </div>
      </div>

      {/* <div className="grid-post-container">
        {samplePostsData.map((post) => {
          return (
            <div className="grid-post-box">
              <h4>{post.postNumber}</h4>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default PostsGrid;
