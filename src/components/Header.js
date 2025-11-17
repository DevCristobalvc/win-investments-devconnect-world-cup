import React, { useState } from 'react';
import './Header.css';
import DevConnectModal from './DevConnectModal';
import { useVerification } from '../context/VerificationContext';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { isVerified } = useVerification();

  return (
    <>
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
            <button onClick={() => setShowModal(true)} className="nav-link devconnect-link devconnect-btn">
              Devconnect World Cup
              {isVerified && <span className="verified-badge">✓</span>}
            </button>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ingresar">INGRESAR</button>
            <button className="btn-download">📥</button>
            <button className="btn-language">🌐</button>
          </div>
        </div>
      </header>
      
      <DevConnectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
