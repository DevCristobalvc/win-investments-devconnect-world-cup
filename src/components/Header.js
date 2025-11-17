import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-w">W</span>
        </div>
        
        <nav className="nav">
          <a href="#mercado" className="nav-link">Mercado</a>
          <a href="#equipos" className="nav-link">Equipos</a>
          <a href="#compania" className="nav-link">Compañía</a>
          <a href="#wins-token" className="nav-link">$WINS Token</a>
          <a href="#ayuda" className="nav-link">Ayuda</a>
          <a href="#devconnect" className="nav-link devconnect-link">Devconnect World Cup</a>
        </nav>
        
        <div className="header-actions">
          <button className="btn-ingresar">INGRESAR</button>
          <button className="btn-download">📥</button>
          <button className="btn-language">🌐</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
