import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./images/b.png";

function NavTopbar(props) {
  let { handleClick, nav, setNav } = props;

  return (
    <div className="header-container">
      <div className="nav-title-container">
        {nav ? (
          <img src={logo} alt="logo" className="logo" onClick={handleClick} />
        ) : (
          <Link to="/">
            <h1 className="title">
              beginner's mind
              <span className="cursive javascript-title">JavaScript</span>
            </h1>
          </Link>
        )}
      </div>
      {nav ? (
        <p className="nav-x" onClick={handleClick}>
          X
        </p>
      ) : (
        <FaBars size={24} className="nav-three-lines" onClick={handleClick} />
      )}
    </div>
  );
}

export default NavTopbar;
