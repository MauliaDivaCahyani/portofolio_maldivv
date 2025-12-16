import React from 'react';
import utdiLogo from '../assets/images/utdi-logo.png';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Pendidikan</h2>
        <div className="education-content">
          <div className="education-description">
            <p>
              Saat ini saya menempuh pendidikan pada Program Studi Sistem Informasi di Universitas Teknologi Digital Indonesia.
              Fokus pembelajaran saya meliputi pengembangan sistem informasi, pemrograman web, pengelolaan basis data, serta perancangan antarmuka pengguna.
            </p>
          </div>

          <div className="education-details">
            <div className="education-card">
              <div className="education-logo">
                <img src={utdiLogo} alt="Logo UTDI" className="utdi-logo" />
              </div>
              <h3>Universitas Teknologi Digital Indonesia</h3>
              <p className="program">Program Studi Sistem Informasi</p>
              <p className="year">Tahun Masuk: 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;