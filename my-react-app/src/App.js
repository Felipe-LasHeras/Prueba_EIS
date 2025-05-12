// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import MenuPage from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </Router>
  );
}

export default App;