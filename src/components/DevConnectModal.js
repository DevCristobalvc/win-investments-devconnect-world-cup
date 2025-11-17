import React, { useState } from 'react';
import './DevConnectModal.css';
import ZKVerification from './ZKVerification';

function DevConnectModal({ isOpen, onClose }) {
  const [showVerification, setShowVerification] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [betAmount, setBetAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('USDC');

  const teams = [
    { id: 1, name: 'Crypto Champions', country: '🇦🇷 Argentina', players: 5 },
    { id: 2, name: 'Blockchain Bulls', country: '🇧🇷 Brasil', players: 5 },
    { id: 3, name: 'DeFi Dynamos', country: '🇺🇾 Uruguay', players: 5 },
    { id: 4, name: 'Web3 Warriors', country: '🇨🇱 Chile', players: 5 },
    { id: 5, name: 'NFT Knights', country: '🇨🇴 Colombia', players: 5 },
    { id: 6, name: 'Smart Contract FC', country: '🇵🇪 Perú', players: 5 }
  ];

  if (!isOpen) return null;

  if (showVerification) {
    return <ZKVerification onClose={() => setShowVerification(false)} onBack={() => setShowVerification(false)} />;
  }

  const handleParticipate = () => {
    if (!selectedTeam) {
      alert('Por favor selecciona un equipo');
      return;
    }
    setShowVerification(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content devconnect-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <div className="event-badge">⚡ DEVCONNECT ARGENTINA 2025</div>
          <h1 className="modal-title">DEVCONNECT WORLD CUP</h1>
          <p className="modal-subtitle">
            Torneo exclusivo con tecnología ZK Identity · Premio: <span className="prize">1 ETH</span>
          </p>
        </div>

        <div className="tournament-info">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🏆</div>
              <div className="info-label">Premio Final</div>
              <div className="info-value">1 ETH</div>
            </div>
            <div className="info-card">
              <div className="info-icon">📅</div>
              <div className="info-label">Gran Final</div>
              <div className="info-value">20 NOV</div>
            </div>
            <div className="info-card">
              <div className="info-icon">👥</div>
              <div className="info-label">Equipos</div>
              <div className="info-value">{teams.length}</div>
            </div>
            <div className="info-card">
              <div className="info-icon">🔐</div>
              <div className="info-label">Verificación</div>
              <div className="info-value">ZK Proof</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">📋 Cómo Participar</h3>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <div>
                <strong>Verifica tu Identidad con ZKPassport</strong>
                <p>Usa Zero-Knowledge Proofs para verificar que eres una persona real sin revelar tus datos</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div>
                <strong>Selecciona tu Equipo</strong>
                <p>Elige uno de los equipos participantes del torneo</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div>
                <strong>Realiza tu Apuesta (Opcional)</strong>
                <p>Apuesta en USDC, BTC o ETH para aumentar el premio acumulado</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div>
                <strong>Compite y Gana</strong>
                <p>El equipo ganador se lleva el premio acumulado en la final del 20 de noviembre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">⚽ Equipos Participantes</h3>
          <div className="teams-grid">
            {teams.map(team => (
              <div 
                key={team.id} 
                className={`team-card ${selectedTeam === team.id ? 'selected' : ''}`}
                onClick={() => setSelectedTeam(team.id)}
              >
                <div className="team-country">{team.country}</div>
                <div className="team-name">{team.name}</div>
                <div className="team-players">👥 {team.players} jugadores</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">💰 Apuesta (Opcional)</h3>
          <div className="bet-section">
            <div className="crypto-selector">
              {['USDC', 'BTC', 'ETH'].map(crypto => (
                <button
                  key={crypto}
                  className={`crypto-btn ${selectedCrypto === crypto ? 'active' : ''}`}
                  onClick={() => setSelectedCrypto(crypto)}
                >
                  {crypto}
                </button>
              ))}
            </div>
            <input
              type="number"
              className="bet-input"
              placeholder={`Cantidad en ${selectedCrypto}`}
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="zk-benefits">
          <div className="benefits-header">
            <span className="zk-icon">🔐</span>
            <h4>Beneficios de la Verificación ZK</h4>
          </div>
          <ul className="benefits-list">
            <li>✅ Privacidad Total: No compartimos tus datos personales</li>
            <li>✅ Verificación Instantánea: Proceso rápido usando tu pasaporte</li>
            <li>✅ Seguridad Criptográfica: Zero-Knowledge Proofs garantizan autenticidad</li>
            <li>✅ Credencial Reutilizable: Úsala en futuros eventos y productos WIN</li>
            <li>✅ Badge Digital: Recibe reconocimiento como participante verificado</li>
          </ul>
        </div>

        <div className="modal-footer">
          <button className="btn-participate" onClick={handleParticipate}>
            🚀 COMENZAR VERIFICACIÓN ZK
          </button>
          <p className="footer-note">
            Al participar aceptas usar ZKPassport para verificar tu identidad de forma privada
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevConnectModal;
