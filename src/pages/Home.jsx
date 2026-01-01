import React from 'react';
import { Link } from 'react-router-dom';
import ImpactStats from '../components/ImpactStats';

const Home = () => {
  const styles = {
    home: {
      paddingTop: '70px'
    },
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '100px 0',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      fontWeight: 'bold'
    },
    heroText: {
      fontSize: '1.3rem',
      marginBottom: '2.5rem',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    btn: {
      display: 'inline-block',
      padding: '15px 30px',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.1rem'
    },
    btnPrimary: {
      background: '#e74c3c',
      color: 'white'
    },
    btnSecondary: {
      background: '#3498db',
      color: 'white'
    },
    btnHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    mission: {
      padding: '80px 0',
      background: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    missionContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    missionText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    missionTitle: {
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    missionDescription: {
      color: '#666',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      margin: 0
    },
    missionList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    },
    missionListItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.1rem',
      color: '#333'
    },
    missionImage: {
      textAlign: 'center'
    },
    missionImg: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    emergencyCallout: {
      background: '#e74c3c',
      color: 'white',
      padding: '60px 0',
      textAlign: 'center'
    },
    emergencyTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    emergencyText: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: 0.9
    }
  };

  return (
    <div style={styles.home}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Every Child Deserves a Future</h1>
          <p style={styles.heroText}>
            Join us in providing shelter, education, and hope to orphaned children across Africa. 
            Your support can transform lives and build brighter futures.
          </p>
          <div style={styles.heroButtons}>
            <Link 
              to="/donate" 
              style={{...styles.btn, ...styles.btnPrimary}}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Donate Now
            </Link>
            <Link 
              to="/our-work" 
              style={{...styles.btn, ...styles.btnSecondary}}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Mission Section */}
      <section style={styles.mission}>
        <div style={styles.container}>
          <div style={styles.missionContent}>
            <div style={styles.missionText}>
              <h2 style={styles.missionTitle}>Our Mission</h2>
              <p style={styles.missionDescription}>
                Save The Orphans Africa is dedicated to rescuing, nurturing, and empowering 
                orphaned children throughout the African continent. We believe every child 
                deserves safety, education, and the opportunity to thrive.
              </p>
              <ul style={styles.missionList}>
                <li style={styles.missionListItem}>⚕️ Provide healthcare and nutrition</li>
                <li style={styles.missionListItem}>🏫 Ensure access to quality education</li>
                <li style={styles.missionListItem}>🏠 Create safe living environments</li>
                <li style={styles.missionListItem}>❤️ Offer psychological support and care</li>
              </ul>
              <Link 
                to="/about" 
                style={{
                  ...styles.btn,
                  background: 'transparent',
                  color: '#e74c3c',
                  border: '2px solid #e74c3c',
                  alignSelf: 'flex-start'
                }}
              >
                Our Story
              </Link>
            </div>
            <div style={styles.missionImage}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                Mission Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section style={styles.emergencyCallout}>
        <div style={styles.container}>
          <h2 style={styles.emergencyTitle}>Emergency Relief Needed</h2>
          <p style={styles.emergencyText}>
            Thousands of children are waiting for your help. Your donation today can provide 
            immediate shelter, food, and medical care.
          </p>
          <Link 
            to="/donate" 
            style={{
              ...styles.btn,
              background: 'white',
              color: '#e74c3c'
            }}
          >
            Give Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;