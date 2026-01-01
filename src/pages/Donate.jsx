// src/pages/Donate.jsx
import React from 'react';
import DonationForm from '../components/DonationForm';

const Donate = () => {
  const styles = {
    donate: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
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
      margin: 0,
      color: 'white'
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
      margin: 0,
      color: 'white'
    },
    donationContent: {
      padding: '60px 0'
    },
    donationGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'start'
    },
    donationInfo: {
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#333'
    },
    infoTitle: {
      color: '#2c3e50',
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    allocationChart: {
      margin: '30px 0'
    },
    allocationItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 0',
      borderBottom: '1px solid #eee'
    },
    label: {
      fontWeight: '500',
      color: '#333',
      fontSize: '1.1rem'
    },
    percentage: {
      fontWeight: 'bold',
      color: '#e74c3c',
      fontSize: '1.2rem'
    },
    impactExamples: {
      margin: '30px 0',
      padding: '25px',
      background: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    },
    impactTitle: {
      color: '#2c3e50',
      marginBottom: '1rem',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    impactList: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 0 0'
    },
    impactListItem: {
      padding: '12px 0',
      position: 'relative',
      paddingLeft: '30px',
      fontSize: '1.1rem',
      color: '#333',
      borderBottom: '1px solid #f1f1f1'
    },
    checkmark: {
      position: 'absolute',
      left: 0,
      color: '#27ae60',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    },
    trustBadges: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      marginTop: '30px'
    },
    badge: {
      background: '#27ae60',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    donationFormSection: {
      position: 'sticky',
      top: '90px'
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      donationGrid: {
        gridTemplateColumns: '1fr',
        gap: '40px'
      },
      donationInfo: {
        padding: '25px'
      },
      trustBadges: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      pageHeader: {
        padding: '60px 0 40px'
      },
      pageTitle: {
        fontSize: '2.5rem'
      }
    }
  };

  return (
    <div style={styles.donate}>
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Make a Difference Today</h1>
          <p style={styles.pageSubtitle}>Your donation provides immediate help and lasting hope</p>
        </div>
      </section>

      <section style={styles.donationContent}>
        <div style={styles.container}>
          <div style={styles.donationGrid}>
            <div style={styles.donationInfo}>
              <h2 style={styles.infoTitle}>Where Your Money Goes</h2>
              
              <div style={styles.allocationChart}>
                <div style={styles.allocationItem}>
                  <span style={styles.label}>Education & Schools</span>
                  <span style={styles.percentage}>40%</span>
                </div>
                <div style={styles.allocationItem}>
                  <span style={styles.label}>Healthcare & Nutrition</span>
                  <span style={styles.percentage}>30%</span>
                </div>
                <div style={styles.allocationItem}>
                  <span style={styles.label}>Shelter & Care</span>
                  <span style={styles.percentage}>20%</span>
                </div>
                <div style={styles.allocationItem}>
                  <span style={styles.label}>Administration</span>
                  <span style={styles.percentage}>2%</span>
                </div>
                <div style={styles.allocationItem}>
                  <span style={styles.label}>Fundraising</span>
                  <span style={styles.percentage}>8%</span>
                </div>
              </div>

              <div style={styles.impactExamples}>
                <h3 style={styles.impactTitle}>Your Impact</h3>
                <ul style={styles.impactList}>
                  <li style={styles.impactListItem}>
                    <span style={styles.checkmark}>✓</span>
                    $25 provides school supplies for one child
                  </li>
                  <li style={styles.impactListItem}>
                    <span style={styles.checkmark}>✓</span>
                    $50 covers medical care for a month
                  </li>
                  <li style={styles.impactListItem}>
                    <span style={styles.checkmark}>✓</span>
                    $100 feeds a child for three months
                  </li>
                  <li style={styles.impactListItem}>
                    <span style={styles.checkmark}>✓</span>
                    $500 supports a child's education for a year
                  </li>
                </ul>
              </div>

              <div style={styles.trustBadges}>
                <div style={styles.badge}>✓ 98% to Programs</div>
                <div style={styles.badge}>✓ Financial Transparency</div>
                <div style={styles.badge}>✓ Registered Charity</div>
              </div>
            </div>

            <div style={styles.donationFormSection}>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;