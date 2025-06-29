import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Skill from './Components/Skills'
import Projects from './Components/Projects'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skill />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
