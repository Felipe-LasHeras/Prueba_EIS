// src/components/ui/GridOverlay.js
import React, { useState } from 'react';
import '../../styles/components/ui/GridOverlay.css';

function GridOverlay() {
  const [visible, setVisible] = useState(true);

  // Creamos un array con la estructura correcta de la grilla
  const createGridElements = () => {
    const elements = [];
    
    // Margen izquierdo (36px)
    elements.push(<div key="left-margin" className="grid-margin"></div>);
    
    // 12 columnas (92px) y 11 espacios (24px) alternados
    for (let i = 0; i < 12; i++) {
      elements.push(<div key={`column-${i}`} className="grid-column"></div>);
      
      // Solo añadimos espacio después de las columnas 1-11 (no después de la 12)
      if (i < 11) {
        elements.push(<div key={`space-${i}`} className="grid-space"></div>);
      }
    }
    
    // Margen derecho (36px)
    elements.push(<div key="right-margin" className="grid-margin"></div>);
    
    return elements;
  };

  return (
    <>
      <button 
        className="grid-toggle" 
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Ocultar Grid' : 'Mostrar Grid'}
      </button>
      
      {visible && (
        <div className="grid-overlay">
          <div className="grid-container">
            {createGridElements()}
          </div>
        </div>
      )}
    </>
  );
}

export default GridOverlay;