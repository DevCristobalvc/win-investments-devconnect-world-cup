import React from 'react';
import './PlayersSection.css';

function PlayersSection() {
  const players = [
    {
      name: 'Juan Ignacio Nardoni',
      age: 23,
      position: 'Medio',
      value: '€ 4,600,000',
      otherSources: '€ 6.3 M',
      percentage: '+15%',
      club: 'Racing Club',
      image: '👤'
    },
    {
      name: 'Enzo Barrenechea',
      age: 24,
      position: 'Medio',
      value: '€ 9,265,000',
      otherSources: '€ 12.5 M',
      percentage: '+35%',
      club: 'SL Benfica',
      image: '👤'
    },
    {
      name: 'Emiliano Martínez',
      age: 33,
      position: 'Arquero',
      value: '€ 10,932,100',
      otherSources: '€ 48.8 M',
      percentage: '+218%',
      club: 'Aston Villa',
      image: '👤'
    }
  ];

  return (
    <section className="players-section">
      <div className="section-header">
        <h2 className="section-title">LOS MÁS ELEGIDOS</h2>
        <p className="section-subtitle">JUGADORES MÁS POPULARES</p>
      </div>

      <div className="players-table">
        <div className="table-header">
          <div className="th th-player">Jugador</div>
          <div className="th th-name">Nombre</div>
          <div className="th th-value">Valuación</div>
          <div className="th th-sources">Otras fuentes</div>
          <div className="th th-age">Edad</div>
          <div className="th th-position">Posición</div>
          <div className="th th-club">Club actual</div>
          <div className="th th-action"></div>
        </div>

        {players.map((player, index) => (
          <div key={index} className="player-row">
            <div className="td td-player">
              <div className="player-avatar">{player.image}</div>
            </div>
            <div className="td td-name">{player.name}</div>
            <div className="td td-value">
              <span className="value-amount">{player.value}</span>
            </div>
            <div className="td td-sources">
              <span className="sources-amount">{player.otherSources}</span>
              <span className={`percentage ${player.percentage.includes('+') ? 'positive' : 'negative'}`}>
                {player.percentage}
              </span>
            </div>
            <div className="td td-age">{player.age}</div>
            <div className="td td-position">{player.position}</div>
            <div className="td td-club">
              <span className="club-badge">🏆</span>
              {player.club}
            </div>
            <div className="td td-action">
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlayersSection;
