import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Contact from "./components/Contact";
import Lifestyle from "./components/Lifestyle";
import Festive from "./components/Festive";
import Portrait from "./components/Portrait";
import Headshot from "./components/Headshot";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar className="sticky" />
      <Routes>
        {/* Single-page scrolling route */}
        <Route
          path="/"
          element={
            <div>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="catalogue">
                <Catalogue />
              </div>
              <div id="contact">
                <Contact />
              </div>
          
            </div>
          }
        />
        {/* Standalone routes */}
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/festive" element={<Festive />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/headshot" element={<Headshot />} />
      </Routes>
    </div>
  );
};

export default App;
