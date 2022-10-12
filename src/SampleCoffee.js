import React from "react";
import coffeeHero from "./images/coffeehero.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";
import coffee from "./images/coffee.png";
import coffee2 from "./images/coffee2.png";
import coffee3 from "./images/coffee3.png";

function SampleCoffee() {
  return (
    <div className="sample-sites-page">
      <div className="coffee-page">
        {/* nav section*/}
        <div className="coffee-nav">
          <div className="coffee-nav-title">
            <h1>coffee</h1>
          </div>
          <div className="coffee-nav-right-side">
            <a className="coffee-nav-item" href="#menu">
              menu
            </a>

            <a className="coffee-nav-item" href="#contact">
              contact
            </a>
          </div>
        </div>

        {/* hero section */}
        <div>
          <img
            src={coffeeHero}
            alt="coffee shop"
            className="coffee-hero-image"
          />
        </div>

        {/* about/mission section */}
        <div className="coffee-about-section">
          <div className="coffee-about-content-container">
            <h2 className="coffee-about-title">coffee</h2>
            <p className="coffee-about-p">
              Since 2022, Coffee has been serving our community with only the
              highest quality sustainably grown coffee and delicious pastries.
              At Coffee, you are welcome to enjoy your morning cup, meet your
              online date, or grab your afternoon study or work pick-me-up.
            </p>
          </div>
        </div>

        {/* location */}
        <div className="coffee-location-container">
          <div className="coffee-location">
            <h4>COFFEE TOWN, USA</h4>
            <p>1234 Coffee Street</p>
            <p>Monday-Thursday 6am-4pm</p>
            <p>Friday-Saturday 6am-5pm</p>
            <p>Sunday 7am-4pm</p>
          </div>
        </div>

        {/* image */}
        <div className="coffee-wrapper">
          <div className="coffee-wrapper-inner"></div>
        </div>

        <div>
          <img className="coffee-image-2" src={coffee2} alt="coffee" />
        </div>

        {/* menu section*/}
        <div id="menu">
          <h3 className="coffee-menu-section-title">menu</h3>
          <div className="coffee-menu-section">
            <div className="coffee-menu-subsection">
              <h4 className="coffee-menu-section-header">coffee</h4>
              <div className="coffee-menu-item-price">
                <span>regular/decaf</span>
                <div className="coffee-prices">
                  <span>2.5</span>
                  <span>3.5</span>
                  <span>4.5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>latte</span>
                <div className="coffee-prices">
                  <span>3.5</span>
                  <span>4.5</span>
                  <span>5.5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>cappucino</span>
                <div className="coffee-prices">
                  <span>3.5</span>
                  <span>4.5</span>
                  <span>5.5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>cold brew</span>
                <div className="coffee-prices">
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>nitro</span>
                <div className="coffee-prices">
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                </div>
              </div>
            </div>

            <div className="coffee-menu-subsection">
              <h4 className="coffee-menu-section-header">tea</h4>
              <div className="coffee-menu-item-price">
                <span>chai</span>
                <div className="coffee-prices">
                  <span>3.5</span>
                  <span>4.5</span>
                  <span>5.5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>green</span>
                <div className="coffee-prices">
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>mint</span>
                <div className="coffee-prices">
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="coffee-menu-item-price">
                <span>lemon ginger</span>
                <div className="coffee-prices">
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            <div className="coffee-menu-subsection">
              <h4 className="coffee-menu-section-header">pastries</h4>
              <div className="coffee-menu-item-price">
                <span>bagel</span>
                <span>4</span>
              </div>
              <div className="coffee-menu-item-price">
                <span>croissant</span>
                <span>5</span>
              </div>
              <div className="coffee-menu-item-price">
                <span>cookie</span>
                <span>3</span>
              </div>
              <div className="coffee-menu-item-price">
                <span>banana bread</span>
                <span>4</span>
              </div>
            </div>

            <div className="coffee-menu-subsection">
              <h4 className="coffee-menu-section-header">extras</h4>
              <div className="coffee-menu-item-price">
                <span>oat milk</span>
                <span>.25</span>
              </div>
              <div className="coffee-menu-item-price">
                <span>almond milk</span>
                <span>.25</span>
              </div>
              <div className="coffee-menu-item-price">
                <span>add shot</span>
                <span>1.5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="coffee-wrapper-2">
          <div className="coffee-wrapper-inner"></div>
        </div>

        <div>
          <img className="coffee-image-2" src={coffee3} alt="coffee" />
        </div>

        <h3 className="coffee-brands-section-title">brands we carry</h3>
        <div className="coffee-brands-section-container">
          <div className="coffee-brands-section">
            <div className="coffee-brands-section-column">
              <p className="coffee-brands-item">sample coffee brand</p>
              <p className="coffee-brands-item">sample coffee brand</p>
              <p className="coffee-brands-item">sample tea brand</p>
              <p className="coffee-brands-item">sample milk brand</p>
              <p className="coffee-brands-item">sample bakery brand</p>
            </div>
            <div className="coffee-brands-section-column">
              <p className="coffee-brands-item">sample coffee brand</p>
              <p className="coffee-brands-item">sample coffee brand</p>
              <p className="coffee-brands-item">sample tea brand</p>
              <p className="coffee-brands-item">sample milk brand</p>
              <p className="coffee-brands-item">sample bakery brand</p>
            </div>
          </div>
        </div>

        <div id="contact">
          <h3 className="coffee-contact-section-title">contact</h3>
          <div className="coffee-contact-section">
            <p className="coffee-contact-label">name</p>
            <p className="coffee-contact-label">email</p>
            <p className="coffee-contact-label">message</p>
          </div>
        </div>
        <div className="coffee-icon-wrapper">
          <img src={coffee} alt="coffee" className="coffee-icon" />
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

export default SampleCoffee;
