// src/components/layout/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Asegúrate de que este import sea correcto
import GridOverlay from '../ui/GridOverlay'; // Nuevo import
import '../../styles/components/layout/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <GridOverlay /> {/* Agregamos el overlay aquí */}
      <Navbar />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;