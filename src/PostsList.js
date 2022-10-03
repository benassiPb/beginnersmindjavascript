import React from "react";
import samplePostsData from "./data/postData";
import SinglePost from "./SinglePost";

function PostsList(props) {
  const { setCurrentPost, currentPost } = props;

  const handleClick = (postId) => {
    setCurrentPost(postId);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="postslist-page-container">
      <h2 className="all-posts">All Posts</h2>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div
              key={post.id}
              className="postslist-single-post-container"
              onClick={() => handleClick(post.id)}
            >
              <img
                className="post-image postslist-image"
                src={post.image}
                alt={post.title}
              />

              <h2
                className="postslist-title"
                onClick={() => handleClick(post.id)}
              >
                {post.title}
              </h2>
              <span className="postslist-subject">{post.subject}</span>
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
