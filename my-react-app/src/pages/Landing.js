// src/pages/Landing.js
import React from "react";
import Button from "../components/ui/Button";
import "../styles/pages/Landing.css";
import cinnamon from "../components/assets/FELIPE/IMAGENES/Cinnamon.jpg"
import waffle2 from "../components/assets/FELIPE/IMAGENES/Waffle 2.jpg"
import equipo1 from "../components/assets/FELIPE/IMAGENES/Brownie plato horizontal.jpg"
import equipo2 from "../components/assets/FELIPE/IMAGENES/Brownie plato vertical.jpg"
import vasobeige from "../components/assets/FELIPE/ILUSTRACIONES/Vaso beige.png"
import cafelado from "../components/assets/FELIPE/IMAGENES/Cafe helado lado.jpg"
import cafediagonal from "../components/assets/FELIPE/IMAGENES/Cafe helado diagonal.jpg"
import cafearriba from "../components/assets/FELIPE/IMAGENES/Cafe helado arriba.jpg"
import pistacho from "../components/assets/FELIPE/IMAGENES/Pistacho horizontal.jpg"
import galleta from "../components/assets/FELIPE/IMAGENES/Galleta en sarten.jpg"
import tiramisu from "../components/assets/FELIPE/IMAGENES/Tiramisu.jpg"
import wafflefrutilla from "../components/assets/FELIPE/IMAGENES/Waffle frutilla.jpg"
import cafegalleta from "../components/assets/FELIPE/IMAGENES/Cafe galleta.jpg"
import tazacafe from "../components/assets/FELIPE/ILUSTRACIONES/Taza cafe.png"
import logogris from "../components/assets/FELIPE/ILUSTRACIONES/Logo circular gris.png"

function LandingPage() {
  return (
    <div className="estilo-pagina">
       <div className="estilo-pagina">
    <section className="hero">
      <div className="container-hero">
        <div className="foto-principal"><img src="cinnamon" alt="" /></div>
        <div className="texto-foto-principal">
          <h1>
            THE ULTIMATE
            <br />
            DESSERT
            <br />
            EXPERIENCE
          </h1>
        </div>
      </div>
    </section>
    <div className="InfoCafe">
      <section className="hero-info-bar">
        {/* Columna logo - 1era columna */}
        <div className="hero-info-logo">
          <div className="eis-text-03">EIS Cafe</div>
          <div className="eis-text-03">&nbsp;</div>
          <div className="eis-text-03">&nbsp;</div>
        </div>

        {/* Columna códigos - 3era columna */}
        <div className="hero-info-codes">
          <div className="eis-text-03">BHX</div>
          <div className="eis-text-03">DXB</div>
          <div className="eis-text-03">LND</div>
        </div>

        {/* Direcciones - 4ta y 5ta columna */}
        <div className="hero-info-addresses">
          <div className="eis-text-03">500 Coventry Road, Birmingham</div>
          <div className="eis-text-03">Opening soon...</div>
          <div className="eis-text-03">Opening soon...</div>
        </div>

        {/* Días - 7ma columna */}
        <div className="hero-info-days">
          <div className="eis-text-03">MON - SUN</div>
          <div className="eis-text-03">FRIDAY</div>
          <div className="eis-text-03">&nbsp;</div>
        </div>

        {/* Horas - 8va columna */}
        <div className="hero-info-times">
          <div className="eis-text-03">10:30 - 23:30</div>
          <div className="eis-text-03">14:00 - 23:30</div>
          <div className="eis-text-03">&nbsp;</div>
        </div>

        {/* Copyright - 10ma y 11va columna */}
        <div className="hero-info-copyright">
          <div className="">© COPYRIGHT 2024 EIS CAFE LTD.</div>
          <div className="">ALL RIGHTS RESERVED</div>
          <div className="">&nbsp;</div>
        </div>
      </section>
    </div>
    
    <section className="Crafted">
      <div className="texto-bring">
        Bringing bold flavours and unforgettable moments to every visit for
        a truly memorable experience like no other.
      </div>
      <div className="imagen-izquierda-crafted">
        <div className="ImagenIzquierda"><img src="waffle2" alt="" /></div>
        <div className="texto-titulo-derecho">
          <h2>CRAFTED FOR YOUR EVERYDAY MOMENTS</h2>
        </div>
        <div className="texto-pequeño-derecho-crafted">
          Find your moment of joy with us – from first sips to final bites,
          we're here to make every day a little more memorable.
        </div>

        <div className="boton-shop">
          <Button>Shop</Button>
        </div>
      </div>
    </section>
        <section className="equipo">
          <div className="imagen-equipo-izquieda"><img src="equipo1" alt="" /></div>
          <div className="imagen-equipo-derecha"><img src="equipo2" alt="" /></div>
        </section>
        <section className="quienes">
          <div className="texto-titulo-quienes">WHO WE ARE</div>
          <div className="texto-subtitulo-quienes">
            A family run, locally sourced cafe since 2009
          </div>
          <div className="texto-pequeño-quienes">
            Since 2009, we’ve been a local favourite for unique, delicious
            desserts and quality coffee. We take pride in sourcing fresh
            ingredients and putting our family’s passion into every cup and
            plate, offering an experience as memorable as it is tasty.
          </div>
          <div className="boton-quienes">
            <Button>Learn more...</Button>
          </div>
        </section>
        <section>
          <div className="texto-titulo-signature">SIGNATURE CREATIONS</div>
          <div className="texto-subtitulo-signature">
            Always Fresh, Always Innovative
          </div>
          <div className="texto-pequeño-izquierda-signature">
            Always Fresh, Always Innovative
          </div>
          <div className="boton-signature">
            <Button>See the menu</Button>
          </div>
          <div className="imagen-derecha-signature"><img src="vasobeige" alt="" /></div>
        </section>
        <section>
          <div className="locoShakes">
            <div className="texo-titlulo-locoshakes">LOCOSHAKES</div>
            <div className="imagen-izquierda-locoshakes"><img src="cafelado" alt="" /></div>
            <div className="imagen-superior-derecha1-locoshakes"><img src="cafediagonal" alt="" /></div>
            <div className="imagen-superior-derecha2-locoshakes"><img src="cafearriba" alt="" /></div>
            <div className="texto-pequeño-derecha"></div>
          </div>
        </section>
        <section>
          <div className="bakings">
            <div className="texo-titlulo-bakings">BAKINGS</div>
            <div className="texto-pequeño-izquierda-bakings"></div>
            <div className="imagen-superior-derecha-bakings"><img src="pistacho" alt="" /></div>
            <div className="imagen-inferior-derecha-bakings"><img src="galleta" alt="" /></div>
          </div>
        </section>
        <section>
          <div className="desserts">
            <div className="texo-titlulo-desserts">DESSERTS</div>
            <div className="imagen-izquierda-desserts"><img src="tiramisu" alt="" /></div>
            <div className="texto-pequeño-derecha-desserts"></div>
            <div className="imagen-derecha-desserts"><img src="wafflefrutilla" alt="" /></div>
          </div>
        </section>
        <section>
          <div className="coffee">
            <div className="texo-titlulo-coffee">COFFEE</div>
            <div className="texto-pequeño-derecha"></div>
            <div className="imagen-izquierda-coffee"><img src="cafegalleta" alt="" /></div>
            <div className="imagen-derecha-coffee"><img src="cafegalleta" alt="" /></div>
          </div>
        </section>
        <section>
          <div className="locations">
            <div className="brimingham">
              <div className="titulo-imagen-brimingham"></div>
              <div className="texto-pequeño-izquieda-brimingham"></div>
              <div className="texto-pequeño-derecha-brimingham"></div>
              <div className="imagen-brimingham"></div>
            </div>
            <div className="london">
              <div className="titulo-imagen-london"></div>
              <div className="texto-pequeño-izquieda-london"></div>
              <div className="texto-pequeño-derecha-london"></div>
              <div className="imagen-london"></div>
            </div>
            <div className="dubai">
            <div className="titulo-imagen-dubai"></div>
              <div className="texto-pequeño-izquieda-dubai"></div>
              <div className="texto-pequeño-derecha-dubai"></div>
              <div className="imagen-dubai"></div>
            </div>
          </div>
        </section>
        <section className="connected">
        <div className="StayConnected">
          <div className="texto-titulo-connected"></div>
          <div className="texto-pequeño-connected"></div>
          <div className="icono-izquierdo-connected"><img src="tazacafe" alt="" /></div>
          <div className="icono-centro-connected"><img src="vasobeige" alt="" /></div>
          <div className="icono-derecho-connected"><img src="logogris" alt="" /></div>
        </div>
          </section>
      </div>
      </div>
  );
}

export default LandingPage;
