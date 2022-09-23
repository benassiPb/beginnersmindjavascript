import React from "react";
import samplePostsData from "./postData";

function PostsList() {
  return (
    <div>
      <div>
        {samplePostsData.map((post) => {
          return (
            <div>
              <h4>
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
