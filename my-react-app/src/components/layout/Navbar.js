import React, { useState } from 'react';
import MenuNavigation from './MenuNavigation';
import '../../styles/components/layout/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Línea superior */}
        <div className="navbar-border-top"></div>
        
        <div className="navbar-content">
          {/* Espacio izquierdo */}
          <div className="navbar-left"></div>
          
          {/* Logo centrado */}
          <div className="navbar-center">
            <h1 className="navbar-logo">EIS&nbsp;&nbsp;&nbsp;Cafe</h1>
          </div>
          
          {/* Menú hamburguesa */}
          <div className="navbar-right">
            <button className="navbar-menu-button" onClick={openMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="navbar-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Línea inferior */}
        <div className="navbar-border-bottom"></div>
      </nav>

      {/* Menú de navegación lateral */}
      <MenuNavigation isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;