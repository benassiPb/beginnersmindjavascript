import React from "react";
import testimonialData from "./data/testimonialData";
import HomeProjectsScroll from "./ProjectsScroll";
import HomePostsGrid from "./HomePostsGrid";
import video from "./images/homehero.mp4";

function Home() {
  return (
    <div className="home-page">
      <div className="home-video-container">
        <video autoPlay loop muted playsInline className="home-video">
          <source src={video} type="video/mp4" ></source>
        </video>
      </div>

      <h2 className="home-subheader">RECENT PROJECTS</h2>
      <HomeProjectsScroll />
      <h2 className="home-subheader">RECENT WRITING</h2>
      <HomePostsGrid />
      <h2 className="home-subheader testimonials-header">TESTIMONIALS</h2>
      <div className="home-testimonials-container">
        {testimonialData.map((item) => (
          <div className="home-testimonial-container" key={item.id}>
            <div className="home-testimonial-quote">
              <div className="home-testimonial-quotation-quote-container">
                <p className="home-testimonial-large-quotation">"</p>
                <p>{item.quote}"</p>
              </div>
            </div>
            <div className="home-testimonial-author-bio-container">
              <p className="home-testimonial-author bold">{item.author}</p>
              <p className="home-testimonial-author">{item.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
