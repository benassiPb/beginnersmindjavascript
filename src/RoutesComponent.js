import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
  useParams,
} from "react-router-dom";
import Projects from "./Projects";
import Posts from "./Posts";
import About from "./About";
import Home from "./Home";
import Error from "./Error";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/posts/:postId" element={<Posts />} />
      <Route path="/projects/:projectId" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RoutesComponent;
