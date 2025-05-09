// src/components/layout/MenuNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/MenuNavigation.css';

function MenuNavigation({ isOpen, onClose }) {
  return (
    <div className={`menu-navigation ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>×</button>
      <nav className="menu-content">
        <ul>
          <li><Link to="/" onClick={onClose}>Inicio</Link></li>
          <li><Link to="/menu" onClick={onClose}>Menú</Link></li>
          <li><Link to="/about" onClick={onClose}>Sobre Nosotros</Link></li>
          <li><Link to="/gallery" onClick={onClose}>Galería</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNavigation;