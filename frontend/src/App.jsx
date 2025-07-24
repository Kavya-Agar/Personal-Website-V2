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

function AppContent() {
    return (
        <>
            <Navbar />
            <SplashCursor />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
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
