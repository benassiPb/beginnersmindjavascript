import React, { useState } from "react";
import NavTopbar from "./NavTopbar";
import NavSidebar from "./NavSidebar";

function Nav(props) {
  let { nav, setNav } = props;

  const handleClick = () => {
    setNav(!nav);
  };

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
