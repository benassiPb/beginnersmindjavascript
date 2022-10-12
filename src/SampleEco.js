import React from "react";
import ecocover from "./images/ecocover.png";
import ecocover2 from "./images/ecocover2.png";
import ecocover3 from "./images/ecocover3.png";
import ecocover4 from "./images/ecocover4.png";
import ecocover5 from "./images/ecocover5.png";
import undrawcook from "./images/undrawcook.png";
import undrawpeople from "./images/undrawpeople.jpg";
import undrawstars from "./images/undrawstars.png";
import undrawgarden from "./images/undrawgarden.png";
import undrawcontact from "./images/undrawcontact.png";
import undrawmeditation from "./images/undrawmeditation.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";
import ecoperson1 from "./images/ecoperson1.png";
import ecoperson2 from "./images/ecoperson2.png";
import ecoperson3 from "./images/ecoperson3.png";

function SampleEco() {
  return (
    <div>
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

            <a className="eco-nav-item" href="#contact">
              contact us
            </a>
          </div>
        </div>
        {/* hero illustrated */}
        <div className="eco-hero-section-container">
          <div className="eco-hero-section">
            <div className="eco-hero-illustration-container">
              <img
                src={undrawgarden}
                alt="garden"
                className="eco-hero-illustration"
              />
            </div>
            <div className="eco-hero-text-container">
              <h2 className="eco-hero-title">Eco</h2>
              <div className="eco-hero-buttons">
                <a
                  className="eco-hero-button eco-hero-button-inverse"
                  href="#programs"
                >
                  Programs
                </a>
                <a
                  className="eco-hero-button eco-hero-button-inverse"
                  href="#getinvolved"
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* image
        <div className="eco-mobile-image-container">
          <img src={ecocover} alt="eco" className="eco-mobile-image" />
        </div> */}
        {/* <div className="eco-wrapper">
          <div className="eco-wrapper-inner"></div>
        </div> */}
        {/* about */}
        {/* <div className="eco-illustration-center-container ">
          <img
            src={undrawmeditation}
            alt="woman meditating"
            className="eco-illustration-center"
          /> */}
        {/* </div> */}
        <div id="about" className="eco-about-section-container">
          <div>
            <h2 className="eco-about-subtitle">mission</h2>
            <div className="eco-mission-section">
              <div className="eco-about-text-container">
                <p className="eco-about-text">
                  At Eco, we believe community is at the heart of everything we
                  do. Since 2022, we have grown and locally distributed more
                  than 10,000 pounds of organic produce while following
                  sustainable farming principles. We supply produce to local
                  restaurants, sell at farmers' markets, and we also offer a
                  wide range of programming for our community.
                </p>
              </div>
            </div>

            {/* team */}

            <div className="eco-illustration-center-container ">
              <img
                src={undrawpeople}
                alt="woman and dog"
                className="eco-illustration-center"
              />
            </div>

            <h2 className="eco-about-subtitle">our team</h2>
            <div className="eco-team-cards">
              <div className="eco-team-card">
                <img src={ecoperson3} alt="woman" className="eco-team-image" />
                <h3>Dolly</h3>
                <p>Farm Director</p>
              </div>

              <div className="eco-team-card">
                <img src={ecoperson1} alt="woman" className="eco-team-image" />
                <h3>Sally</h3>
                <p>Site Manager</p>
              </div>

              <div className="eco-team-card">
                <img src={ecoperson2} alt="man" className="eco-team-image" />
                <h3>Mike</h3>
                <p>Program Coordinator</p>
              </div>
            </div>
          </div>
        </div>
        {/* programs */}
        <div className="eco-illustration-center-container ">
          <img
            src={undrawstars}
            alt="garden"
            className="eco-illustration-center"
          />
        </div>
        <div id="programs">
          <div className="eco-programs-section-container">
            <h2 className="eco-about-subtitle">programs</h2>
            <div className="eco-programs-cards">
              <div className="eco-programs-card">
                <img
                  src={ecocover}
                  alt=""
                  className="eco-programs-card-image"
                />
                <h3 className="eco-programs-card-text">community share</h3>
              </div>
              <div className="eco-programs-card">
                <img
                  src={ecocover3}
                  alt=""
                  className="eco-programs-card-image"
                />
                <h3 className="eco-programs-card-text">youth summer camp</h3>
              </div>
              <div className="eco-programs-card">
                <img
                  src={ecocover2}
                  alt=""
                  className="eco-programs-card-image"
                />
                <h3 className="eco-programs-card-text">
                  farmer apprenticeship
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* get involved */}
        <div className="eco-illustration-center-container ">
          <img
            src={undrawcook}
            alt="garden"
            className="eco-illustration-center"
          />
        </div>
        <div id="getinvolved" className="eco-involved-section">
          <h2 className="eco-about-subtitle ">get involved</h2>
          <div className="eco-programs-cards">
            <div className="eco-programs-card">
              <img src={ecocover5} alt="" className="eco-programs-card-image" />
              <h3 className="eco-programs-card-text">volunteer</h3>
            </div>
            <div className="eco-programs-card">
              <img src={ecocover4} alt="" className="eco-programs-card-image" />
              <h3 className="eco-programs-card-text">work with us</h3>
            </div>
          </div>
        </div>
        {/* contact us*/}
        <div className="eco-contact-section-parent-container">
          <div className="eco-illustration-center-container ">
            <div className="eco-contact-section-image-container">
              <img
                src={undrawcontact}
                alt="contact"
                className="eco-illustration-center"
              />
            </div>
          </div>
          <div id="contact">
            <div className="eco-contact-section-container">
              <h3 className="eco-contact-section-title">contact</h3>
              <p className="eco-contact-label">name</p>
              <p className="eco-contact-label">email</p>
              <p className="eco-contact-label">message</p>
            </div>
          </div>
        </div>
        <div className="coffee-footer">
          <span className="coffee-footer-item">
            <AiFillInstagram size={28} />
          </span>
          <span className="coffee-footer-item">
            <AiFillFacebook size={28} />
          </span>
          <span className="coffee-footer-item">
            <AiFillTwitterSquare size={28} />
          </span>
          <span className="coffee-footer-item">
            <AiFillGoogleSquare size={28} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SampleEco;
