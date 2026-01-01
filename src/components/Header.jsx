import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const styles = {
    header: {
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px'
    },
    logo: {
      textDecoration: 'none'
    },
    logoText: {
      color: '#e74c3c',
      margin: 0,
      fontSize: '1.5rem'
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      padding: '8px 16px',
      borderRadius: '4px'
    },
    navLinkHover: {
      color: '#e74c3c'
    },
    activeLink: {
      color: '#e74c3c',
      background: '#f8f9fa'
    },
    donateBtn: {
      background: '#e74c3c',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'background 0.3s ease'
    },
    donateBtnHover: {
      background: '#c0392b'
    },
    menuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <h2 style={styles.logoText}>Save The Orphans Africa</h2>
        </Link>
        
        <nav style={styles.nav}>
          <Link 
            to="/" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/' ? styles.activeLink : {})
            }}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/about' ? styles.activeLink : {})
            }}
          >
            About
          </Link>
          <Link 
            to="/our-work" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/our-work' ? styles.activeLink : {})
            }}
          >
            Our Work
          </Link>
          <Link 
            to="/donate" 
            style={styles.donateBtn}
          >
            Donate Now
          </Link>
          <Link 
            to="/contact" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/contact' ? styles.activeLink : {})
            }}
          >
            Contact
          </Link>
        </nav>

        <button 
          style={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;