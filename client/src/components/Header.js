import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo - als Home Button */}
        <Link to="/" className="logo">
          <span className="logo-title">FINEWERK</span>
          <span className="logo-subtitle">
            <span>S</span>
            <span>A</span>
            <span>A</span>
            <span>R</span>
            <span>L</span>
            <span>O</span>
            <span>U</span>
            <span>I</span>
            <span>S</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/menu">Speisekarte</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;