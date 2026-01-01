import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const styles = {
    contact: {
      paddingTop: '70px'
    },
    pageHeader: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '80px 0 60px',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    pageTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      margin: 0
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
      margin: 0
    },
    contactContent: {
      padding: '80px 0',
      background: 'white'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    contactTitle: {
      color: '#2c3e50',
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    contactMethod: {
      padding: '1.5rem',
      background: '#f8f9fa',
      borderRadius: '8px'
    },
    methodTitle: {
      color: '#e74c3c',
      fontSize: '1.2rem',
      marginBottom: '0.5rem'
    },
    methodText: {
      color: '#666',
      margin: 0,
      lineHeight: '1.6'
    },
    officeHours: {
      padding: '1.5rem',
      background: '#f8f9fa',
      borderRadius: '8px'
    },
    contactFormSection: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    formLabel: {
      color: '#333',
      fontWeight: '500',
      fontSize: '1rem'
    },
    formInput: {
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease'
    },
    formInputFocus: {
      borderColor: '#3498db',
      outline: 'none'
    },
    formTextarea: {
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'border-color 0.3s ease'
    },
    submitBtn: {
      background: '#e74c3c',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    submitBtnHover: {
      background: '#c0392b'
    }
  };

  return (
    <div style={styles.contact}>
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Contact Us</h1>
          <p style={styles.pageSubtitle}>Get in touch to learn more, volunteer, or partner with us</p>
        </div>
      </section>

      <section style={styles.contactContent}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            <div style={styles.contactInfo}>
              <h2 style={styles.contactTitle}>Get In Touch</h2>
              
              <div style={styles.contactMethod}>
                <h3 style={styles.methodTitle}>📍 Address</h3>
                <p style={styles.methodText}>
                  123 Hope Street<br />
                  Nairobi, Kenya
                </p>
              </div>

              <div style={styles.contactMethod}>
                <h3 style={styles.methodTitle}>📞 Phone</h3>
                <p style={styles.methodText}>
                  +1 (555) 123-HELP<br />
                  +254 700 123 456
                </p>
              </div>

              <div style={styles.contactMethod}>
                <h3 style={styles.methodTitle}>✉️ Email</h3>
                <p style={styles.methodText}>
                  info@savetheorphans.africa<br />
                  support@savetheorphans.africa
                </p>
              </div>

              <div style={styles.officeHours}>
                <h3 style={styles.methodTitle}>Office Hours</h3>
                <p style={styles.methodText}>
                  Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
                  Weekends: Emergency line only
                </p>
              </div>
            </div>

            <div style={styles.contactFormSection}>
              <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.formLabel}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.formLabel}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.formTextarea}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  style={styles.submitBtn}
                  onMouseOver={(e) => e.target.style.background = '#c0392b'}
                  onMouseOut={(e) => e.target.style.background = '#e74c3c'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;