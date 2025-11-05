import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">KONTAKT</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>BESUCHEN SIE UNS</h2>
              
              <div className="info-item">
                <h3>📍 ADRESSE</h3>
                <p>
                  Finewerk Saarlouis<br />
                  Hauptstraße 123<br />
                  66740 Saarlouis
                </p>
              </div>
              
              <div className="info-item">
                <h3>📞 TELEFON</h3>
                <p>+49 6831 123456</p>
              </div>
              
              <div className="info-item">
                <h3>✉️ E-MAIL</h3>
                <p>info@finewerk-saarlouis.de</p>
              </div>
              
              <div className="info-item">
                <h3>🕒 ÖFFNUNGSZEITEN</h3>
                <div className="opening-hours">
                  <div className="hours-row">
                    <span className="days">Mo - Di - Mi - Do - So</span>
                    <span className="times">10:00 - 18:00 Uhr</span>
                  </div>
                  <div className="hours-row">
                    <span className="days">Fr - Sa</span>
                    <span className="times">10:00 - 20:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form" id="nachricht-senden">
            <h2>NACHRICHT SENDEN</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">NACHRICHT SENDEN</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8794393365297!2d6.74675341227375!3d49.31656677127865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795a900014a29ef%3A0xe02d7fabeb1976a7!2sFinewerk!5e0!3m2!1sde!2sde!4v1762300779558!5m2!1sde!2sde" 
          width="100%" 
          height="400" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Finewerk Saarlouis Standort"
        />
      </div>
    </div>
  );
};

export default ContactPage;