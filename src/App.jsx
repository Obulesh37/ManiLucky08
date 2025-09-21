import React from "react";
import Header from "./Components/header";
import "./App.css";
import Hero from "./pages/Hero";  
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Myskills from "./pages/Myskills";
import Resume from "./pages/Resume";
import {Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/MySkills" element={<Myskills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
      );
}
export default App;