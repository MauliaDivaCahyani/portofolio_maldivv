import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="vision-mission">
      <div className="container">
        <div className="vm-grid">
          <div className="vision-card">
            <h3>Vision</h3>
            <p>
              Menjadi individu yang kompeten, adaptif, dan bertanggung jawab dalam pengembangan aplikasi web 
              yang bermanfaat dan mudah digunakan.
            </p>
          </div>
          
          <div className="mission-card">
            <h3>Mission</h3>
            <ul>
              <li>Mengembangkan aplikasi web dengan struktur kode yang rapi dan mudah dipelihara</li>
              <li>Mengimplementasikan teknologi web modern sesuai kebutuhan proyek</li>
              <li>Terus meningkatkan keterampilan teknis dan non-teknis</li>
              <li>Menerapkan prinsip desain antarmuka yang berfokus pada kenyamanan pengguna</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;