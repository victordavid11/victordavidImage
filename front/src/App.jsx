import React from 'react'
import {Routes, Route, BrowserRouter, Router} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Catalogue from './components/Catalogue'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar className="sticky" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App
