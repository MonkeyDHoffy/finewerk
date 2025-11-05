import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Finewerk</h3>
            <p>Ihr gemütliches Kaffee im Herzen der Stadt</p>
          </div>
          <div className="footer-section">
            <h4>Öffnungszeiten</h4>
            <p>Mo-Fr: 7:00 - 19:00</p>
            <p>Sa-So: 8:00 - 18:00</p>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Musterstraße 123, 12345 Stadt</p>
            <p>+49 123 456789</p>
            <p>info@finewerk.de</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Finewerk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;