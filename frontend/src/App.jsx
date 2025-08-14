import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import DarkVeil from "./blocks/Backgrounds/DarkVeil/DarkVeil.jsx";
import CustomCursor from "./components/Cursor.jsx";

function AppContent() {

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <DarkVeil speed={2} hueShift={60} warpAmount={5} />
      </div>
      {/* <CustomCursor  /> */}
        <div className="flex flex-col min-h-screen">
        <Navbar  />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/experience"
            element={<Experience />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
