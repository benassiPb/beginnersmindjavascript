import React from "react";
import coffeehero from "./images/coffeehero.png";
import ecocover from "./images/ecocover.png";
import { Link } from "react-router-dom";

function SampleList() {
  return (
    <div className="sample-page-covers-container">
      <div className="sample-page-cover-container">
        <Link to="/coffee">
          <img
            src={coffeehero}
            alt="coffeeshop"
            className="sample-page-cover-image"
          />
        </Link>
        <div className="sample-page-cover-description">
          <Link>
            <h3>coffee</h3>
          </Link>
          <p>
            Coffee is a sample site for a small food / beverage / retail
            business. The layout includes a 3-D parallax scroll effect on larger
            screens, a hip minimalist menu, and clean display of info with a
            handful of images and/or a video.
          </p>
        </div>
      </div>
      <div className="sample-page-cover-container">
        <Link to="/eco">
          <img src={ecocover} alt="eco" className="sample-page-cover-image" />
        </Link>
        <div className="sample-page-cover-description">
          <Link to="/eco">
            {" "}
            <h3>eco</h3>
          </Link>
          <p>
            Eco is a sample site for an organization with a friendly, welcoming,
            and positive aesthetic, featuring lots of illustrations,
            information, and cards to display info like staff profiles,
            programs, and opportunities.
          </p>
        </div>
        {/* <div className="sample-page-cover-container">
            <Link to="/professional">
              <img
                src={yogahero}
                alt="professional"
                className="sample-page-cover-image"
              />
            </Link>
            <div className="sample-page-cover-description">
              <Link>
                <h3>yoga</h3>
              </Link>
              <p>
                Yoga is a sample professional site. It features clean,
                rectangular design, giving it a sharp, confident, and
                business-like feel.
              </p>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default SampleList;
