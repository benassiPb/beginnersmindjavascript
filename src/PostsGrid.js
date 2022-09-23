import React from "react";
import postData from "./data/postData";

function PostsGrid() {
  return (
    <div className="grid-page-container">
      <div></div>
      <div className="width-max-800 width-min-500">
        <div className="posts-container">
          <div className="posts-title-container">
            <p className=" posts-title"> Healthy Habits</p>
          </div>
          <div className="posts-content-container">
            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Healthy Habits" ? (
                  <div key={post.id}>
                    <p className="grid-subtitle">{post.title}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="posts-container reverse-wrap">
          <div className="posts-content-container">
            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Connect and Expand" ? (
                  <div key={post.id}>
                    <p className="grid-subtitle">{post.title}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className="posts-title-container">
            <p className=" posts-title"> Connect and Expand</p>
          </div>
        </div>

        <div className="posts-container">
          <div className="posts-title-container">
            <p className=" posts-title">Getting the Interview</p>
          </div>
          <div className="posts-content-container">
            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Getting the Interview" ? (
                  <div key={post.id}>
                    <p className="grid-subtitle">{post.title}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="posts-container reverse-wrap">
          <div className="posts-content-container">
            <p className="posts-list">
              {postData.map((post) =>
                post.subject === "Passing Technical Interviews" ? (
                  <div key={post.id}>
                    <p className="grid-subtitle">{post.title}</p>
                  </div>
                ) : null
              )}
            </p>
          </div>
          <div className="posts-title-container">
            <p className=" posts-title"> Passing Technical Interviews</p>
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
      <div></div>
    </div>
  );
}

export default PostsGrid;
