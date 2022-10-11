import React from "react";
import testimonialData from "./data/testimonialData";
import HomeProjectsScroll from "./ProjectsScroll";
import HomePostsGrid from "./HomePostsGrid";
import SampleSites from "./SampleSites";
import video from "./images/pbhomevideo.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-video-container">
        <video autoPlay loop muted playsInline className="home-video">
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className="home-quote">
        <p className="home-quote-p">web & software development with heart</p>
        <p className="home-quote-learn">
          <span>
            <Link to="/about">
              <span className="about-dash">-</span> learn more
              <span className="about-dash">-</span>{" "}
            </Link>
          </span>
        </p>
      </div>
      <h2 className="home-subheader">WEB DESIGN SAMPLES</h2>

      <h2 className="home-subheader">RECENT WRITING</h2>
      <HomePostsGrid />
      <h2 className="home-subheader">RECENT PROJECTS</h2>
      <HomeProjectsScroll />
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
