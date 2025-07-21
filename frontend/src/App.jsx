import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Experience from './components/Experience.jsx'

function AppContent() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
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
