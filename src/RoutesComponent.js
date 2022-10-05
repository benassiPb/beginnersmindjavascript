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
import Services from "./Services";
import Shop from "./Shop";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<Posts />} />
      <Route path="/projects/:projectId" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RoutesComponent;
