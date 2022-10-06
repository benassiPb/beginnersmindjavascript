import "./App.css";
import Nav from "./Nav.js";
import React, { useState } from "react";
import RoutesComponent from "./RoutesComponent";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div className="App">
      <div>
        <Nav nav={nav} setNav={setNav} />
        <RoutesComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
