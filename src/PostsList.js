import React from "react";
import samplePostsData from "./data/postData";

function PostsList() {
  return (
    <div>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div key={post.id}>
              <h2 className="postslist-title">
                {post.postNumber}. {post.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
