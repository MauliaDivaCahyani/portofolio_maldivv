import React from 'react';
import profileImage from '/assets/profile.jpeg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Maulia Diva Cahyani</h1>
            <p className="hero-tagline">Membangun solusi web yang bersih, terstruktur, dan mudah digunakan.</p>
            <button className="cta-button" onClick={scrollToProjects}>
              👉 Lihat Portofolio
            </button>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <img 
                src={profileImage} 
                alt="Maulia Diva Cahyani" 
                className="profile-img"
                loading="eager"
                onLoad={(e) => {
                  console.log('✅ Profile image loaded successfully!');
                  e.target.style.opacity = '1';
                  e.target.style.display = 'block';
                  // Hide any existing fallback
                  const fallback = e.target.parentNode.querySelector('.profile-fallback');
                  if (fallback) fallback.remove();
                }}
                onError={(e) => {
                  console.error('❌ Failed to load profile image');
                  e.target.style.display = 'none';
                  if (!e.target.parentNode.querySelector('.profile-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'profile-fallback';
                    fallback.innerHTML = '<div class="profile-initials">MDC</div><p>Foto profil tidak dapat dimuat</p>';
                    e.target.parentNode.appendChild(fallback);
                  }
                }}
                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;