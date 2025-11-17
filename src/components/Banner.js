import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 19,
    minutes: 9,
    seconds: 51
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-tag">PREVENTA FINAL</span>
          <h1 className="banner-title">
            EL FUTURO DEL DEPORTE<br />
            SE HACE REALIDAD
          </h1>
          <p className="banner-subtitle">
            $WINS: Presentamos el primer utility token creado para el deporte.
          </p>
          
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="countdown-label">días</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="countdown-label">hrs</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="countdown-label">min</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="countdown-label">seg</div>
            </div>
          </div>
          
          <button className="btn-preventa">INGRESAR A LA PREVENTA</button>
        </div>
        
        <div className="banner-image">
          <div className="coin-container">
            <div className="coin">
              <span className="coin-w">W</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
