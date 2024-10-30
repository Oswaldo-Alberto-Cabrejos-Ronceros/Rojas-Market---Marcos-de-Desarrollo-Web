// src/components/Footer/Footer.jsx
import React from "react";
import LogoImg from '../../assets/imgLogo/Logo.png'
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-left">
          <nav>
            <ul>
              <li><a href="/page1">Nosotros</a></li>
              <li><a href="/page2">Productos</a></li>
              <li><a href="/page3">Tiendas</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-section footer-center">

          <img src={LogoImg} alt="Logo del Sitio" className="footer-logo" />
        </div>

        <div className="footer-section footer-right">
          <nav>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Rojas Market. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
