import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')} className="nav-link">Beranda</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">Tentang</a>
          <a href="#education" onClick={() => scrollToSection('education')} className="nav-link">Pendidikan</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">Kemampuan</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">Proyek</a>
          <a href="#certificates" onClick={() => scrollToSection('certificates')} className="nav-link">Sertifikat</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Kontak</a>
        </div>

        <div className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;