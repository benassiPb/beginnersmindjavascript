import React, { useState } from "react";
import SinglePost from "./SinglePost.js";
import PostsList from "./PostsList.js";
import PostsGrid from "./PostsGrid.js";

function Writing() {
  const [postView, setPostView] = useState("grid");
  return (
    <div className="Writing-page-container">
      <div>
        <div className="writing-toggle-view">
          <div className="pointer" onClick={() => setPostView("grid")}>
            {postView === "grid" ? (
              <span className="padding-10 bold">Grid View</span>
            ) : (
              <span className={["padding-10"]}>Grid View</span>
            )}
          </div>
          <span className="padding-10">|</span>

          <div className="pointer" onClick={() => setPostView("list")}>
            {postView === "list" ? (
              <span className="padding-10 bold">List View</span>
            ) : (
              <span className={["padding-10"]}>List View</span>
            )}
          </div>
          <span className="padding-10">|</span>

          <div className="pointer" onClick={() => setPostView("single")}>
            {postView === "single" ? (
              <span className="padding-10 bold">Single Post View</span>
            ) : (
              <span className={["padding-10"]}>Single Post View</span>
            )}
          </div>
        </div>

        {postView === "list" ? <PostsList /> : null}
        {postView === "single" ? <SinglePost /> : null}
        {postView === "grid" ? <PostsGrid /> : null}
      </div>
    </div>
  );
}

export default Writing;
