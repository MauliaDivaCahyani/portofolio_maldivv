import React from 'react';
import rumahSakitImage from '../assets/images/apotek-utdi.png';
import perhotelanImage from '../assets/images/roomzy-hotel.png';
import jimpitanRondaImage from '../assets/images/kesorga-jimpitan.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Penjualan Barang',
      description: 'Aplikasi web untuk sistem penjualan barang dengan fitur manajemen produk dan transaksi',
      technologies: ['PHP', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      githubLink: 'https://github.com/MauliaDivaCahyani/WEB-PENJUALAN-BARANG.git',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Web Penyewaan Buku',
      description: 'Sistem informasi penyewaan buku dengan fitur katalog dan manajemen peminjaman',
      technologies: ['PHP', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      githubLink: 'https://github.com/MauliaDivaCahyani/WEB-PENYEWAAN-BUKU.git',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Kalkulator Web',
      description: 'Aplikasi kalkulator dengan antarmuka web yang responsif dan mudah digunakan',
      technologies: ['PHP', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      githubLink: 'https://github.com/MauliaDivaCahyani/KALKULATOR-SEDERHANA.git',
      status: 'completed'
    },
    {
      id: 4,
      title: 'UI/UX Sistem Informasi Rumah Sakit',
      description: 'Desain antarmuka sistem informasi rumah sakit dengan fokus pada user experience',
      technologies: ['UI/UX Design'],
      tools: ['Figma', 'Uizard'],
      image: rumahSakitImage,
      githubLink: 'https://github.com/MauliaDivaCahyani/UI-UX-RUMAH-SAKIT.git',
      status: 'completed'
    },
    {
      id: 5,
      title: 'UI/UX Sistem Perhotelan',
      description: 'Perancangan antarmuka pengguna untuk sistem manajemen hotel',
      technologies: ['UI/UX Design'],
      tools: ['Figma', 'Uizard'],
      image: perhotelanImage,
      githubLink: 'https://github.com/MauliaDivaCahyani/UI-UX-PERHOTELAN.git',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Sistem Jimpitan Ronda',
      description: 'Aplikasi web untuk manajemen jimpitan ronda dengan teknologi modern',
      technologies: ['React.js', 'Express.js'],
      image: jimpitanRondaImage,
      liveLink: 'https://kesorga.vmp.my.id/',
      status: 'completed'
    },
    {
      id: 7,
      title: 'Wireframe Sistem Jimpitan Ronda',
      description: 'Perancangan wireframe dan prototype sistem jimpitan ronda menggunakan Uizard',
      technologies: ['UI/UX Design'],
      tools: ['Uizard'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
      uizardLink: 'https://app.uizard.io/p/2aba329a',
      status: 'completed'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyek</h2>
        {/* Test link untuk debugging */}
        <div style={{margin: '20px 0', textAlign: 'center'}}>
          <a href="https://github.com/MauliaDivaCahyani/WEB-PENJUALAN-BARANG.git" target="_blank" rel="noopener noreferrer" 
             style={{padding: '10px 20px', background: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>
            TEST: GitHub Link
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80';
                  }}
                />
                {project.status === 'coming-soon' && (
                  <div className="coming-soon-badge">Coming Soon</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.tools && project.tools.map((tool, index) => (
                    <span key={`tool-${index}`} className="tool-tag">{tool}</span>
                  ))}
                </div>
                {(project.githubLink || project.uizardLink || project.liveLink) && (
                  <div className="project-links">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="live-link"
                        onClick={() => console.log('Clicking live link:', project.liveLink)}
                      >
                        🌐 Lihat Website
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        onClick={() => console.log('Clicking GitHub link:', project.githubLink)}
                      >
                        📂 Lihat di GitHub
                      </a>
                    )}
                    {project.uizardLink && (
                      <a 
                        href={project.uizardLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="uizard-link"
                        onClick={() => console.log('Clicking Uizard link:', project.uizardLink)}
                      >
                        🎨 Lihat di Uizard
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;