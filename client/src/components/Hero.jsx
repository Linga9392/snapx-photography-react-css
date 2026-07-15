import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Enter a world of <span className="highlight">Photos</span> & Amazing <span className="highlight">Awards</span>
        </h1>
        
        <p className="hero-subtitle">
          SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. 
          It is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Explore SnapX Contest</button>
          <button className="btn-video">
            <span className="play-icon">▶</span> Watch Our Video Now
          </button>
        </div>

        <div className="cards-container">
          <div className="card image-card left-card">
            <div className="card-image-wrapper">
              <img src="/images/featured-01.jpg" alt="Nature" />
            </div>
          </div>

          <div className="card info-card">
            <h3 className="card-title">Walk In The Nature <span className="stars">★★★</span> <span className="rating">4.5</span></h3>
            <hr className="card-divider" />
            <div className="card-details">
              <p><strong>Contest Winner:</strong> Thomas Eddy</p>
              <p><strong>Contest Author:</strong> Antony Soft</p>
              <p><strong>Awards:</strong> $1,200 + Coox OS X</p>
            </div>
          </div>

          <div className="card image-card right-card">
            <div className="card-image-wrapper">
              <img src="/images/featured-02.jpg" alt="Mountain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;