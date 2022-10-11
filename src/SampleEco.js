import React from "react";
import ecocover from "./images/ecocover.png";
import undrawcook from "./images/undrawcook.png";
import undrawenvironment from "./images/undrawenvironment.png";
import undrawstars from "./images/undrawstars.png";
import undrawnature from "./images/undrawnature.png";
import undrawgarden from "./images/undrawgarden.png";

function SampleEco() {
  return (
    <div className="sample-sites-page">
      <div className="eco-page">
        {/* nav */}

        <div className="eco-nav">
          <div className="eco-nav-title">
            <h1>eco</h1>
          </div>
          <div className="eco-nav-right-side">
            <a className="eco-nav-item" href="#about">
              about
            </a>

            <a className="eco-nav-item" href="#programs">
              programs
            </a>
            <a className="eco-nav-item" href="#getinvolved">
              get involved
            </a>
            <a className="eco-nav-item" href="#contactus">
              contact us
            </a>
          </div>
        </div>

        {/* hero illustrated */}

        <div className="eco-hero-section-container">
          <div className="eco-hero-section">
            <div className="eco-hero-text-container">
              <h2 className="eco-hero-title">Growing Together</h2>
              <p>Welcome to Eco Farm.</p>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#getinvolved">Support Us.</a>
            </div>
            <img
              src={undrawgarden}
              alt="garden"
              className="eco-hero-illustration"
            />
          </div>
        </div>

        {/* hero */}
        <div className="eco-hero-container">
          <img src={ecocover} alt="eco" className="eco-hero-image" />
        </div>

        {/* about */}
        <div id="about" className="eco-about-section-container">
          <div className="eco-about-section">
            <h2 className="eco-about-title">FOOD = COMMUNITY</h2>
            <p>
              "We can begin by doing small things at the local level, like
              planting community gardens or looking out for our neighbors. That
              is how change takes place in living systems, not from above but
              from within, from many local actions occurring simultaneously."
            </p>
            <p>Grace Lee Boggs</p>

            <h2 className="eco-about-subtitle">mission</h2>
            <p>
              At Sample Farm, we believe community is at the heart of everything
              we do. Since 2022, we have grown organic fruits and vegetables
              using sustainable farming principles.
            </p>

            <h2 className="eco-about-subtitle">our team</h2>
          </div>
        </div>

        {/* the land */}
        <div id="theland">
          <h2 className="eco-about-subtitle">the land</h2>
        </div>

        {/* programs */}
        <div id="programs">
          <h2 className="eco-about-title">FOOD = EDUCATION</h2>
          <h2 className="eco-about-subtitle">programs</h2>
          <h2>community share</h2>
          <h2>youth summer camp</h2>
        </div>

        {/* get involved */}
        <div id="getinvolved">
          <h2 className="eco-about-subtitle">get involved</h2>
          <h2>apprenticeship</h2>
          <h2>volunteer</h2>
          <h2>work with us</h2>
        </div>

        {/* contact us*/}
        <div id="contactus">
          <h2 className="eco-about-subtitle">contact us</h2>
          <h2>contact info</h2>
        </div>
      </div>
    </div>
  );
}

export default SampleEco;
