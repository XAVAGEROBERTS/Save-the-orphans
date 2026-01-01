import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      background: '#2c3e50',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: '3rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    footerHeading: {
      color: '#e74c3c',
      margin: '0 0 1rem 0',
      fontSize: '1.2rem'
    },
    footerText: {
      margin: '0',
      opacity: 0.8,
      lineHeight: '1.6'
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      opacity: 0.8,
      transition: 'opacity 0.3s ease'
    },
    footerLinkHover: {
      opacity: 1
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem'
    },
    socialLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
      opacity: 0.8,
      transition: 'opacity 0.3s ease'
    },
    footerBottom: {
      borderTop: '1px solid #34495e',
      paddingTop: '1rem',
      textAlign: 'center',
      opacity: 0.7
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Save The Orphans Africa</h3>
            <p style={styles.footerText}>
              Providing hope, education, and shelter to orphaned children across Africa. 
              Together, we can make a difference.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <Link to="/about" style={styles.footerLink}>About Us</Link>
            <Link to="/our-work" style={styles.footerLink}>Our Work</Link>
            <Link to="/donate" style={styles.footerLink}>Donate</Link>
            <Link to="/contact" style={styles.footerLink}>Contact</Link>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Contact Info</h4>
            <p style={styles.footerText}>Email: info@savetheorphans.africa</p>
            <p style={styles.footerText}>Phone: +1 (555) 123-HELP</p>
            <p style={styles.footerText}>Address: 123 Hope Street, Nairobi, Kenya</p>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Follow Us</h4>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} aria-label="Facebook">📘</a>
              <a href="#" style={styles.socialLink} aria-label="Twitter">🐦</a>
              <a href="#" style={styles.socialLink} aria-label="Instagram">📷</a>
              <a href="#" style={styles.socialLink} aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.footerText}>
            &copy; 2024 Save The Orphans Africa. All rights reserved. | Registered Charity 12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;