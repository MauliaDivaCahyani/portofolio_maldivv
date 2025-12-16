import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Acara Seru Dalam Dunia Digital",
      issuer: "Platform Digital",
      date: "2024",
      description: "Sertifikat partisipasi dalam kegiatan pengembangan digital dan teknologi",
      pdfPath: "./assets/certificates/acara-seru-certificate.pdf",
      image: "./assets/certificates/acara-seru-certificate.pdf" // Will be handled as PDF
    },
    {
      id: 2,
      title: "Pencapaian Teknologi Informasi",
      issuer: "Institusi Pendidikan",
      date: "2024",
      description: "Sertifikat pencapaian dan kompetensi dalam bidang teknologi informasi",
      pdfPath: "./assets/certificates/maulia-diva-cahyani-certificate.pdf",
      image: "./assets/certificates/maulia-diva-cahyani-certificate.pdf"
    },
    {
      id: 3,
      title: "Seminar Nasional 2025",
      issuer: "Universitas Teknologi Digital Indonesia",
      date: "16 Maret 2025",
      description: "Sertifikat peserta seminar nasional dengan tema 'Pendidikan di Era AI: Dari Peluang Transformasi hingga Tantangan Implementasi'",
      pdfPath: "./assets/certificates/seminar-nasional-2025-certificate.png",
      image: "./assets/certificates/seminar-nasional-2025-certificate.png"
    }
  ];

  const openCertificate = (filePath) => {
    window.open(filePath, '_blank');
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Sertifikat</h2>
        <div className="certificates-content">
          <div className="certificates-description">
            <p>
              Berikut adalah beberapa sertifikat yang telah saya peroleh dalam perjalanan pembelajaran 
              dan pengembangan kemampuan di bidang teknologi dan digital.
            </p>
          </div>
          
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card">
                <div className="certificate-header">
                  <h3>{certificate.title}</h3>
                  <p className="issuer">{certificate.issuer}</p>
                  <p className="date">{certificate.date}</p>
                </div>
                <div className="certificate-body">
                  <p className="description">{certificate.description}</p>
                </div>
                <div className="certificate-footer">
                  <button 
                    onClick={() => openCertificate(certificate.pdfPath)}
                    className="view-certificate-btn"
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;