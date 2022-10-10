import React from "react";

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
            <a className="eco-nav-item" href="#theland">
              the land
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
            <a className="eco-nav-item" href="#shop">
              shop
            </a>
          </div>
        </div>

        {/* hero / about */}
        <div id="about">
          <h2>hero</h2>
          <h2>about</h2>
          <h2>video</h2>
          <h2>mission</h2>
          <h2>our team</h2>
        </div>

        {/* the land */}
        <div id="theland">
          <h2>land acknowledgement</h2>
          <h2>ecology</h2>
          <h2>local history</h2>
        </div>

        {/* programs */}
        <div id="programs">
          <h2>permaculture apprenticeship</h2>
          <h2>community share</h2>
          <h2>youth summer camp</h2>
        </div>

        {/* get involved */}
        <div id="getinvolved">
          <h2>apprenticeship</h2>
          <h2>volunteer</h2>
          <h2>work with us</h2>
        </div>

        {/* contact us*/}
        <div id="contactus">
          <h2>contact info</h2>
        </div>

        {/* shop */}
        <div id="shop">
          <h2>shop</h2>
        </div>
      </div>
    </div>
  );
}

export default SampleEco;
