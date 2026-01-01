import React from 'react';

const ImpactStats = () => {
  const stats = [
    { number: '5,000+', label: 'Children Supported' },
    { number: '15', label: 'African Countries' },
    { number: '200+', label: 'Local Staff' },
    { number: '98%', label: 'Funds to Programs' }
  ];

  const styles = {
    impactStats: {
      padding: '4rem 0',
      background: '#f8f9fa',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heading: {
      marginBottom: '3rem',
      color: '#2c3e50',
      fontSize: '2.5rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItem: {
      padding: '1.5rem'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#e74c3c',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#666',
      fontSize: '0.9rem'
    }
  };

  return (
    <section style={styles.impactStats}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Impact</h2>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;