import React from "react";
import samplePostsData from "./data/postData";

function PostsList() {
  return (
    <div>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div key={post.id}>
              <h4 className="postslist-title">
                {post.postNumber}. {post.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
