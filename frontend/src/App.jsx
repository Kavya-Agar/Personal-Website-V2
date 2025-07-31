import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import CustomCursor from './components/Cursor.jsx'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'
import FaultyTerminal from './blocks/Backgrounds/FaultyTerminal/FaultyTerminal.jsx'
import Trial from './components/Trial/Trial.jsx'
import Footer from './components/Footer.jsx'

function AppContent() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-green-900">
                <Navbar />
                {/* <SplashCursor /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/trial" element={<Trial />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

function App() {
    return (    
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
