import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'React.js', 'Express.js'
  ];
  
  const tools = [
    'Visual Studio Code', 'GitHub', 'Figma', 'Uizard'
  ];
  
  const softSkills = [
    'Kerja sama tim', 'Komunikasi', 'Manajemen waktu', 'Pembelajaran mandiri', 'Publik speaking'
  ];
  
  const languages = [
    'Bahasa Indonesia (aktif)', 'Bahasa Inggris (menengah)'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Kemampuan</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              {tools.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {languages.map((lang, index) => (
                <span key={index} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;