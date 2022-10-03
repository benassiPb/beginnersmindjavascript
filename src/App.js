import "./App.css";
import Nav from "./Nav.js";
import React, { useState } from "react";
import RoutesComponent from "./RoutesComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [view, setView] = useState("Writing");

  return (
    <div className="App">
      <div>
        <Nav view={view} setView={setView} />
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
