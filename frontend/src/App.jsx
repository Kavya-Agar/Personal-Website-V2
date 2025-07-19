// import { useState } from 'react'
import './App.css'
import Page from './Page.jsx'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppContent() {
    return (
        <>
            <div className="bg-green-900 pt-16">
                <Page />
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
