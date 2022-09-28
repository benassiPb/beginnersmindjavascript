import "./App.css";
import Posts from "./Posts.js";
import About from "./About.js";
import Nav from "./Nav.js";
import Projects from "./Projects.js";
import React, { useState } from "react";
import Footer from "./Footer";
import RoutesComponent from "./RoutesComponent";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  const [view, setView] = useState("Writing");

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <p>* site currently under construction</p>
          <Nav view={view} setView={setView} />
          <RoutesComponent />
        </div>
        {/* <p className="padding-50">*Website currently under construction...</p> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
