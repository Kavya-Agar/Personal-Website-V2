import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import DarkVeil from "./blocks/Backgrounds/DarkVeil/DarkVeil.jsx";
import Aurora from "./blocks/Backgrounds/Aurora/Aurora.jsx";
import CustomCursor from "./components/Cursor.jsx";

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        {!darkMode && <DarkVeil speed={2} hueShift={60} warpAmount={5} />}
        {darkMode && <Aurora colorStops={["#DF1125", "#FFFFFF", "#5227FF"]} blend={0.5} amplitude={1.0} speed={1.5} />}
      </div>

        <div className={`flex flex-col min-h-screen ${darkMode ? "cursor-none" : ""}`}>
        <Navbar enabled={darkMode} setEnabled={setDarkMode} />
        {darkMode && <CustomCursor/>}
        <Routes>
          <Route
            path="/"
            element={<Home enabled={darkMode} setEnabled={setDarkMode} />}
          />
          <Route
            path="/about"
            element={<About enabled={darkMode} setEnabled={setDarkMode} />}
          />
          <Route
            path="/experience"
            element={<Experience enabled={darkMode} setEnabled={setDarkMode} />}
          />
          <Route
            path="/projects"
            element={<Projects enabled={darkMode} setEnabled={setDarkMode} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
