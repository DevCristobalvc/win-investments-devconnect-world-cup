import React, { useState } from 'react';
import './ZKVerification.css';
import { useVerification } from '../context/VerificationContext';

function ZKVerification({ onClose, onBack }) {
  const [step, setStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { verify } = useVerification();

  const handleStartScan = () => {
    setIsScanning(true);
    // Simular escaneo de pasaporte
    setTimeout(() => {
      setIsScanning(false);
      setStep(2);
    }, 3000);
  };

  const handleVerifyProof = () => {
    setIsVerifying(true);
    // Simular verificación de prueba ZK
    setTimeout(() => {
      setIsVerifying(false);
      verify(); // Actualizar el contexto global
      setStep(3);
    }, 2500);
  };

  const handleComplete = () => {
    alert('¡Verificación completa! Ahora estás registrado en el torneo DevConnect World Cup');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onBack}>
      <div className="modal-content zk-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onBack}>✕</button>
        
        <div className="zk-header">
          <div className="zk-logo">🔐</div>
          <h1 className="zk-title">Verificación de Identidad ZK</h1>
          <p className="zk-subtitle">Powered by ZKPassport - Zero-Knowledge Proofs</p>
        </div>

        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="progress-circle">1</div>
            <span>Escanear</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="progress-circle">2</div>
            <span>Verificar</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
            <div className="progress-circle">3</div>
            <span>Confirmar</span>
          </div>
        </div>

        {step === 1 && (
          <div className="verification-step">
            <div className="step-icon">📱</div>
            <h2>Escanea tu Pasaporte</h2>
            <p className="step-description">
              Utilizaremos la tecnología NFC de tu dispositivo para leer el chip de tu pasaporte.
              <strong> No se almacenarán tus datos personales.</strong>
            </p>

            <div className="info-box">
              <h4>¿Qué es ZKPassport?</h4>
              <p>
                ZKPassport genera una prueba criptográfica que verifica tu identidad sin revelar 
                información personal. El proceso es completamente local en tu dispositivo.
              </p>
            </div>

            <div className="security-features">
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <span>Privacidad Total</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Verificación Rápida</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <span>Seguridad Criptográfica</span>
              </div>
            </div>

            {!isScanning ? (
              <button className="btn-action" onClick={handleStartScan}>
                🚀 INICIAR ESCANEO
              </button>
            ) : (
              <div className="scanning-animation">
                <div className="scanner-ring"></div>
                <div className="scanner-ring delay-1"></div>
                <div className="scanner-ring delay-2"></div>
                <div className="scanning-icon">📖</div>
                <p className="scanning-text">Escaneando pasaporte...</p>
              </div>
            )}

            <div className="requirements">
              <p><strong>Requisitos:</strong></p>
              <ul>
                <li>Pasaporte biométrico (con chip NFC)</li>
                <li>Dispositivo con NFC habilitado</li>
                <li>Iluminación adecuada</li>
              </ul>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="verification-step">
            <div className="step-icon success">✓</div>
            <h2>Generar Prueba Zero-Knowledge</h2>
            <p className="step-description">
              Datos del pasaporte escaneados correctamente. Ahora generaremos una prueba criptográfica 
              que valida tu identidad sin compartir información personal.
            </p>

            <div className="proof-visualization">
              <div className="proof-item">
                <span className="proof-label">Datos Escaneados:</span>
                <span className="proof-status encrypted">🔒 Encriptado localmente</span>
              </div>
              <div className="proof-arrow">→</div>
              <div className="proof-item">
                <span className="proof-label">Prueba ZK:</span>
                <span className="proof-status generating">⚙️ Generando...</span>
              </div>
              <div className="proof-arrow">→</div>
              <div className="proof-item">
                <span className="proof-label">WIN Backend:</span>
                <span className="proof-status pending">⏳ Esperando...</span>
              </div>
            </div>

            <div className="info-box zk-explanation">
              <h4>🧠 ¿Cómo funciona Zero-Knowledge?</h4>
              <p>
                Una prueba de conocimiento cero permite demostrar que algo es verdadero (que tienes 
                un pasaporte válido) sin revelar ninguna información adicional (nombre, foto, fecha 
                de nacimiento, etc.).
              </p>
              <div className="zk-example">
                <div className="zk-box private">
                  <strong>Privado (No compartido):</strong>
                  <ul>
                    <li>❌ Nombre completo</li>
                    <li>❌ Número de pasaporte</li>
                    <li>❌ Foto</li>
                    <li>❌ Fecha de nacimiento</li>
                    <li>❌ Nacionalidad</li>
                  </ul>
                </div>
                <div className="zk-box public">
                  <strong>Público (Verificable):</strong>
                  <ul>
                    <li>✅ Pasaporte válido</li>
                    <li>✅ Mayor de edad</li>
                    <li>✅ Persona única</li>
                    <li>✅ Hash criptográfico</li>
                  </ul>
                </div>
              </div>
            </div>

            {!isVerifying ? (
              <button className="btn-action" onClick={handleVerifyProof}>
                🔐 GENERAR Y VERIFICAR PRUEBA ZK
              </button>
            ) : (
              <div className="verifying-animation">
                <div className="verification-spinner"></div>
                <p className="verifying-text">Generando prueba criptográfica...</p>
                <div className="verification-details">
                  <div className="detail-line">▸ Leyendo datos del chip NFC</div>
                  <div className="detail-line">▸ Generando hash criptográfico</div>
                  <div className="detail-line">▸ Creando prueba ZK-SNARK</div>
                  <div className="detail-line">▸ Enviando a WIN para validación</div>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="verification-step success-step">
            <div className="success-animation">
              <div className="success-circle">
                <div className="success-checkmark">✓</div>
              </div>
            </div>
            
            <h2 className="success-title">¡Verificación Exitosa! 🎉</h2>
            <p className="step-description">
              Tu identidad ha sido verificada usando Zero-Knowledge Proofs. 
              Ahora eres parte del DevConnect World Cup.
            </p>

            <div className="credential-card">
              <div className="credential-header">
                <div className="credential-badge">🏆</div>
                <div>
                  <h3>Credencial Verificada</h3>
                  <p>DevConnect Argentina 2025</p>
                </div>
              </div>
              
              <div className="credential-info">
                <div className="credential-row">
                  <span className="label">Estado:</span>
                  <span className="value verified">✓ Verificado</span>
                </div>
                <div className="credential-row">
                  <span className="label">Método:</span>
                  <span className="value">ZKPassport (ZK-SNARK)</span>
                </div>
                <div className="credential-row">
                  <span className="label">Fecha:</span>
                  <span className="value">17 Nov 2025</span>
                </div>
                <div className="credential-row">
                  <span className="label">Prueba Hash:</span>
                  <span className="value hash">0x7f9a...c3d2</span>
                </div>
              </div>

              <div className="credential-benefits">
                <h4>🎁 Beneficios Desbloqueados:</h4>
                <ul>
                  <li>✅ Participación en DevConnect World Cup</li>
                  <li>✅ Badge digital de participante verificado</li>
                  <li>✅ Acceso a futuras dinámicas exclusivas</li>
                  <li>✅ Credencial reutilizable en WIN</li>
                </ul>
              </div>
            </div>

            <button className="btn-action success" onClick={handleComplete}>
              🚀 CONTINUAR AL TORNEO
            </button>

            <div className="next-steps">
              <p><strong>Próximos pasos:</strong></p>
              <p>Tu credencial ZK estará disponible en tu perfil de WIN. Podrás usarla para 
              acceder a funciones exclusivas, participar en votaciones y más.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ZKVerification;
