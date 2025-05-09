// src/pages/Landing.js
import React from 'react';
import Button from '../components/ui/Button';
import '../styles/pages/Landing.css';

function LandingPage() {
  return (
    <div className="EstiloPagina">
      <div className="FotoPrincipal">
        <h1>THE ULTIMATE<br/>DESSERT<br/>EXPERIENCE</h1>
      </div>
      <div className="InfoCafe">
        <div className="Info-EIS">
          <p>Discover family Drinks and Shakes with the thrill of top-tier dessert experience</p>
        </div>
        <div className="Ciudades">Birmingham  London  Dubai</div>
        <div className="Direcciones">165 Great Charles Street, B3 3SG Birmingham</div>
        <div className="Dias">8am–8pm</div>
        <div className="Horarios">Mon-Sat</div>
        <div className="Copy">© 2024 EIS Cafe. All rights reserved.</div>
      </div>
      <div className="SeccionCrafted">
        <div className="TextoSuperior">CRAFTED FOR YOUR EVERYDAY MOMENTS</div>
        <div className="ImagenIzquierda"></div>
        <div className="ContainerDerecho">
          <div className="TextoCrafted">Our bakery specialises in iconic and indulgent offerings designed to satisfy your cravings. Indulge in the richest drinks and sweets crafted with the finest ingredients</div>
          <div className="TextoIntermedio">Each order is prepared fresh to order and delivered for the ultimate convenience</div>
          <div className="ButtonShop">
            <Button>SHOP ALL</Button>
          </div>
        </div>
      </div>
      <div className="SeccionFotos1">
        <div className="FotoIzquierda"></div>
        <div className="FotoDerecha"></div>
      </div>
      <div className="WhoWeAre">
        <div className="TextoWhoWe">WHO WE ARE</div>
        <div className="DescripcionWho">A family run, locally sourced cafe since 2009<br/>We&apos;ve been serving delicious coffee and sweet treats, alongside the best new and most talented producers for over a decade</div>
        <div className="ButtonWho">
          <Button>ABOUT US</Button>
        </div>
      </div>
      <div className="SignatureCreations">
        <div className="TituloSignature">SIGNATURE CREATIONS</div>
        <div className="TextoMasBoton">Always Fresh, Always Innovative</div>
        <div className="IconoDerecha">L →</div>
      </div>
      <div className="LocoShakes">
        <div className="TituloProductos">LOCO SHAKES</div>
        <div className="ImagenIzquierda"></div>
        <div className="ImagenesDerecha"></div>
        <div className="TextoBajoFoto">Indulging individuals with a premium and customizable ice cream experience using locally sourced milk and Belgian waffles & cones</div>
      </div>
      <div className="Bakings"></div>
      <div className="Desserts"></div>
      <div className="Coffee"></div>
      <div className="Locations">
        <div className="Brimingham"></div>
        <div className="London"></div>
        <div className="Dubai"></div>
      </div>
      <div className="StayConnected"></div>
    </div>
  );
}

export default LandingPage;