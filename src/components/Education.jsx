import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Pendidikan</h2>
        <div className="education-content">
          <div className="education-description">
            <p>
              Saat ini saya menempuh pendidikan di Program Studi Sistem Informasi, Universitas Teknologi Digital Indonesia. 
              Saya mempelajari pengembangan sistem informasi, pemrograman web, basis data, serta perancangan antarmuka pengguna.
            </p>
          </div>
          
          <div className="education-details">
            <div className="education-card">
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