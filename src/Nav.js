import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavTopbar from "./NavTopbar";
import NavSidebar from "./NavSidebar";

function Nav(props) {
  let { nav, setNav } = props;

  const handleClick = () => setNav(!nav);
  return (
    <div>
      <NavTopbar handleClick={handleClick} nav={nav} setNav={setNav} />

      {nav === false ? null : (
        <NavSidebar handleClick={handleClick} nav={nav} setNav={setNav} />
      )}
    </div>
  );
}

export default Nav;
