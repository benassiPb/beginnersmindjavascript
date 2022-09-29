import React from "react";
import samplePostsData from "./data/postData";

function PostsList(props) {
  const { setCurrentPost, setPostView } = props;

  const handleClick = (postId) => {
    setCurrentPost(postId);
    setPostView("single");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="postslist-page-container">
      <h2 className="all-posts">All Posts</h2>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div key={post.id} className="postslist-single-post-container">
              <div
                className="postslist-single-post-container-2"
                onClick={() => handleClick(post.id)}
              >
                <img
                  className="post-image postslist-image"
                  src={post.image}
                  alt={post.title}
                />
              </div>

              <h2
                className="postslist-title"
                onClick={() => handleClick(post.id)}
              >
                {post.title}
              </h2>
              <span className="subject-list">{post.subject}</span>
              <p className="point-8-rem">
                {post.month} {post.year}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
