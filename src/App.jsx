import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skill from './Components/Skills';
import Projects from './Components/Projects';
import Surp from './Components/Surprise';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Surprise" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skill />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Surprise" element={<Surp />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
