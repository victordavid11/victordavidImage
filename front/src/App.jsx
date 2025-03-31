import React from 'react'
import {Routes, Route, BrowserRouter, Router} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Catalogue from './components/Catalogue'
import Contact from './components/Contact'
import Lifestyle from './components/Lifestyle'
import Festive from './components/Festive'
import Portrait from './components/Portrait'
import Headshot from './components/Headshot'

const App = () => {
  return (
    <div>
      <Navbar className="sticky" />
      <Routes>
        <Route path="/" element={<Home />} />
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
}

export default App
