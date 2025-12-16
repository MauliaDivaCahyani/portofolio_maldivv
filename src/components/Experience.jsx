import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Tim IT Support (Backend Developer)",
      organization: "Tim Pengembangan Sistem",
      period: "Saat Ini",
      type: "Profesional",
      responsibilities: [
        "Berperan sebagai bagian dari tim IT Support dengan fokus pada pengembangan Backend",
        "Terlibat dalam perancangan, pengembangan, hingga implementasi sistem",
        "Mengelola logika aplikasi, integrasi database, serta memastikan sistem berjalan sesuai kebutuhan pengguna",
        "Berkolaborasi dengan tim lain untuk memastikan sistem siap digunakan secara optimal"
      ]
    },
    {
      id: 2,
      position: "Publikasi, Dokumentasi, dan Desain (PDD)",
      organization: "Karang Taruna",
      period: "2025 - 2027",
      type: "Organisasi",
      responsibilities: [
        "Bertanggung jawab atas dokumentasi kegiatan dalam bentuk foto dan video",
        "Mengelola publikasi kegiatan melalui media sosial dan media informasi lainnya",
        "Menyusun konten visual dan narasi untuk meningkatkan citra serta eksistensi organisasi",
        "Mendukung penyebaran informasi kegiatan kepada masyarakat secara efektif"
      ]
    },
    {
      id: 3,
      position: "Sekretaris",
      organization: "UKM Kampus",
      period: "2024 - 2025",
      type: "Organisasi",
      responsibilities: [
        "Mengelola administrasi organisasi dan dokumentasi kegiatan kampus",
        "Menyusun agenda rapat, notulensi, serta laporan pertanggungjawaban kegiatan",
        "Berperan aktif dalam koordinasi internal organisasi untuk memastikan kegiatan berjalan sesuai rencana",
        "Membantu menjaga keteraturan sistem administrasi organisasi"
      ]
    },
    {
      id: 4,
      position: "Sekretaris",
      organization: "Karang Taruna Tingkat Desa",
      period: "2022 - 2023",
      type: "Organisasi",
      responsibilities: [
        "Mengelola administrasi organisasi, termasuk surat-menyurat dan arsip dokumen",
        "Menyusun notulensi rapat serta laporan kegiatan",
        "Menjadi penghubung komunikasi antara pengurus dan pihak eksternal",
        "Mendukung kelancaran kegiatan sosial dan kepemudaan di tingkat desa"
      ]
    },
    {
      id: 5,
      position: "Bendahara",
      organization: "Organisasi Remaja Masjid",
      period: "2021 - 2022",
      type: "Organisasi",
      responsibilities: [
        "Mengelola keuangan organisasi secara tertib dan transparan",
        "Mencatat pemasukan dan pengeluaran kegiatan keagamaan serta sosial",
        "Menyusun laporan keuangan dan berkoordinasi dengan pengurus terkait pengelolaan dana",
        "Bertanggung jawab atas perencanaan anggaran untuk mendukung keberlangsungan program organisasi"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Pengalaman Organisasi & Profesional</h2>
        <div className="experience-content">
          <div className="experience-description">
            <p>
              Perjalanan karir dan organisasi saya mencakup berbagai peran kepemimpinan dan teknis, 
              dari mengelola administrasi organisasi hingga pengembangan sistem backend yang kompleks.
            </p>
          </div>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-badge">
                      <span className={`badge ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-organization">{exp.organization}</h4>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                  <div className="experience-body">
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;