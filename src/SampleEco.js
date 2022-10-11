import React from "react";
import ecocover from "./images/ecocover.png";
import undrawcook from "./images/undrawcook.png";
import undrawpeople from "./images/undrawpeople.jpg";
import undrawstars from "./images/undrawstars.png";
import undrawnature from "./images/undrawnature.png";
import undrawgarden from "./images/undrawgarden.png";
import undrawteam from "./images/undrawteam.png";
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

        {/* image */}
        <div className="eco-mobile-image-container">
          <img src={ecocover} alt="eco" className="eco-mobile-image" />
        </div>

        {/* <div className="eco-wrapper">
          <div className="eco-wrapper-inner"></div>
        </div> */}

        {/* about */}

        <div className="eco-illustration-center-container ">
          <img
            src={undrawmeditation}
            alt="woman meditating"
            className="eco-illustration-center"
          />
        </div>

        <div id="about" className="eco-about-section-container">
          <div className="eco-about-section">
            <h2 className="eco-about-subtitle">mission</h2>
            <p className="eco-about-text">
              At Eco, we believe community is at the heart of everything we do.
              Since 2022, we have grown and locally distributed more than 10,000
              pounds of organic produce using sustainable farming principles. We
              supply produce to local restaurants, sell at farmer's market, and
              we also offer diverse range of programs for our community.
            </p>

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
                <h3>Pedro</h3>
                <p>Program Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        {/* the land */}

        {/* programs */}

        <div className="eco-illustration-center-container ">
          <img
            src={undrawstars}
            alt="garden"
            className="eco-illustration-center"
          />
        </div>

        <div id="programs">
          <h2 className="eco-about-subtitle">programs</h2>
          <div className="eco-programs-cards">
            <div className="eco-programs-card">
              <h2>community share</h2>
            </div>
            <div className="eco-programs-card">
              <h2>youth summer camp</h2>
            </div>
            <div className="eco-programs-card">
              <h2>sunday farmer's market</h2>
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

        <div id="getinvolved">
          <h2 className="eco-about-subtitle">get involved</h2>
          <h2 className="eco-involved-card">apprenticeship</h2>
          <h2 className="eco-involved-card">volunteer</h2>
          <h2 className="eco-involved-card">work with us</h2>
        </div>
        {/* contact us*/}

        <div className="eco-illustration-center-container ">
          <img
            src={undrawcontact}
            alt="contact"
            className="eco-illustration-center"
          />
        </div>

        <div id="contact">
          <h3 className="coffee-contact-section-title">contact</h3>
          <div className="coffee-contact-section">
            <p className="coffee-contact-label">name</p>
            <p className="coffee-contact-label">email</p>
            <p className="coffee-contact-label">message</p>
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
