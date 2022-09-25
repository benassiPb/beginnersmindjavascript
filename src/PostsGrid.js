import React from "react";
import postData from "./data/postData";
import circle from "./images/circle.png";
import blueshape1 from "./images/blueshape1.png";
import blueshape2 from "./images/blueshape2.png";

function PostsGrid(props) {
  const { setCurrentPost, setPostView } = props;

  const handleClick = (postId) => {
    setCurrentPost(postId);
    setPostView("single");
  };
  return (
    <div className="grid-page-container">
      <div></div>

      <div className="width-max-800 width-min-500">
        {/* <div>
          <h2 className="margin-top-50">writing</h2>
          <p>reflections on programming and more</p>
        </div> */}
        <div className="posts-container">
          <div className="posts-title-container">
            {/* <img src={blueshape1} alt="circle" className="background-circle" /> */}
            <p className="posts-title"> Healthy Habits</p>
          </div>
          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />

            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Healthy Habits" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="posts-container reverse-wrap">
          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />

            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Connection and Community" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className="posts-title-container">
            {/* <img src={blueshape2} alt="circle" className="background-circle" /> */}
            <p className=" posts-title"> Connection and Community</p>
          </div>
        </div>

        <div className="posts-container">
          <div className="posts-title-container">
            {/* <img src={blueshape1} alt="circle" className="background-circle" /> */}
            <p className=" posts-title">Front End</p>
          </div>
          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />

            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Front End" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {" "}
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="posts-container reverse-wrap">
          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />

            <div className="posts-list">
              {postData.map((post) =>
                post.subject === "Cloud" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {" "}
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className="posts-title-container">
            {/* <img src={blueshape1} alt="circle" className="background-circle" /> */}
            <p className=" posts-title"> Cloud Skills</p>
          </div>
        </div>

        <div className="posts-container">
          <div className="posts-title-container">
            {/* <img src={blueshape2} alt="circle" className="background-circle" /> */}
            <p className=" posts-title">Interview Prep</p>
          </div>

          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />
            <div className=" posts-list">
              {postData.map((post) =>
                post.subject === "Interview Prep" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {" "}
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="posts-container reverse-wrap">
          <div className="posts-content-container">
            <img src={circle} alt="circle" className="background-circle" />
            <div className="posts-list">
              {postData.map((post) =>
                post.subject === "Books" ? (
                  <div key={post.id}>
                    <p
                      className="grid-subtitle"
                      onClick={() => handleClick(post.id)}
                    >
                      {" "}
                      {post.title}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className="posts-title-container">
            {/* <img src={blueshape2} alt="circle" className="background-circle" /> */}
            <p className=" posts-title"> Books</p>
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
