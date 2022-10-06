import React, { useState } from "react";
import video from "./images/about.mp4";

function AboutHero() {
  const [image, setImage] = useState(1);
  return (
    <div className="about-hero-container">
      <video autoPlay loop muted className="about-video">
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default AboutHero;
