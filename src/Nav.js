import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavTopbar from "./NavTopbar";
import NavSidebar from "./NavSidebar";

function Nav(props) {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div>
      {nav === false ? (
        <NavTopbar handleClick={handleClick} nav={nav} setNav={setNav} />
      ) : (
        <div>
          <NavTopbar handleClick={handleClick} nav={nav} setNav={setNav} />
          <NavSidebar handleClick={handleClick} nav={nav} setNav={setNav} />
        </div>
      )}
    </div>
  );
}

export default Nav;
