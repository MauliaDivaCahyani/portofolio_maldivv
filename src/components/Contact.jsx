import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Telepon',
      value: '0813-1591-4682',
      link: 'tel:+6281315914682'
    },
    {
      label: 'Email',
      value: 'mauliadivacahyani@gmail.com',
      link: 'mailto:mauliadivacahyani@gmail.com'
    },
    {
      label: 'Alamat',
      value: 'Ds. Somopuro Rt 04/Rw02, Kel. Mutihan, Kec. Gantiwarno, Kab. Klaten, Prov. Jawa Tengah',
      link: null
    },
    {
      label: 'GitHub',
      value: 'github.com/MauliaDivaCahyani',
      link: 'https://github.com/MauliaDivaCahyani'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Kontak</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Jika tertarik untuk berdiskusi atau bekerja sama, silakan hubungi saya melalui kontak berikut:
          </p>
          
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-item">
                <h4>{contact.label}</h4>
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.value}
                  </a>
                ) : (
                  <p>{contact.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;