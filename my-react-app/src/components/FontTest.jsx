import React from 'react';

const FontTest = () => {
  return (
    <div style={{padding: '20px'}}>
      <h1 style={{fontFamily: 'HelveticaNeueLTPro'}}>Prueba de Fuente - Título</h1>
      <p style={{fontFamily: 'HelveticaNeueLTPro'}}>Este es un texto para probar que la fuente HelveticaNeueLTPro está cargada correctamente.</p>
      <p className="text-wrapper-2">Este texto usa clases CSS del diseño.</p>
    </div>
  );
};

export default FontTest;