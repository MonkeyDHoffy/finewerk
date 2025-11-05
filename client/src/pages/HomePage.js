import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/kontakt#nachricht-senden');
    // Scroll zur Nachricht-Senden Section nach kurzer Verzögerung
    setTimeout(() => {
      const element = document.getElementById('nachricht-senden');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="home-page">
      {/* Hero Section - Großes Bild vom Kaffee */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image-placeholder">
            <div className="hero-content">
              <h1 className="hero-title">FINEWERK SAARLOUIS</h1>
              <p className="hero-subtitle">Feinste Kaffeekultur & Kulinarische Vielfalt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservierung Section */}
      <section className="reservation-section">
        <div className="section-container">
          <h2 className="section-title">Platz Reservieren</h2>
          <p className="section-text">
            Sichern Sie sich Ihren Lieblingsplatz in unserem gemütlichen Kaffee. 
            Kontaktieren Sie uns für eine Reservierung.
          </p>
          <button onClick={handleReservationClick} className="cta-button">
            Jetzt Reservieren
          </button>
        </div>
      </section>

      {/* Gutschein Section */}
      <section className="voucher-section">
        <div className="section-container">
          <h2 className="section-title">Gutscheine</h2>
          <p className="section-text">
            Verschenken Sie besondere Momente! Unsere Gutscheine sind das perfekte Geschenk 
            für alle Kaffee- und Genussliebhaber.
          </p>
          <div className="voucher-cards">
            <div className="voucher-card">
              <div className="voucher-image-placeholder"></div>
              <h3>Kaffee Gutschein</h3>
              <p>Perfekt für Kaffeeliebhaber</p>
              <span className="voucher-price">Ab 10€</span>
            </div>
            <div className="voucher-card">
              <div className="voucher-image-placeholder"></div>
              <h3>Menü Gutschein</h3>
              <p>Kulinarische Vielfalt genießen</p>
              <span className="voucher-price">Ab 25€</span>
            </div>
            <div className="voucher-card">
              <div className="voucher-image-placeholder"></div>
              <h3>Erlebnis Gutschein</h3>
              <p>Komplettes Finewerk Erlebnis</p>
              <span className="voucher-price">Ab 50€</span>
            </div>
          </div>
          <button className="cta-button">
            Gutscheine Kaufen
          </button>
        </div>
      </section>

      {/* Produktgalerie Section */}
      <section className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">Unsere Produkte</h2>
          <p className="section-text">
            Entdecken Sie unsere vielfältige Auswahl an hochwertigen Kaffees, 
            frischen Speisen und köstlichen Desserts.
          </p>
          <div className="product-gallery">
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Premium Kaffee</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Frische Speisen</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Hausgemachte Desserts</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Eiscreme</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Getränke-Vielfalt</h3>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-placeholder"></div>
              <h3>Besondere Spezialitäten</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;