import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavTopbar(props) {
let {handleClick, } = props

  return (
    <div className="header-container">
      <div className="nav-title-container">
        <Link to="/">
          <h1 className="title">
            beginner's mind
            <span className="cursive javascript-title">JavaScript</span>
          </h1>
        </Link>
      </div>
      <FaBars size={24} className="nav-three-lines" onClick={handleClick} />
    </div>
  );
}

export default NavTopbar;
