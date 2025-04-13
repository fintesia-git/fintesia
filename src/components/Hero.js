import React from 'react';
import './styles.css';
import backgroundImage from '../assets/sky-and-jet.jpg'; // Importa tu imagen

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>FINTESIA</h1>
      <p className="landing-text">Your hub for innovative projects and ideas.</p>
    </div>
  );
}

export default Hero;