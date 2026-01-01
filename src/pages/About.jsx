import React from 'react';

const About = () => {
  const styles = {
    about: {
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
    story: {
      padding: '80px 0',
      background: 'white'
    },
    storyContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    storyText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    storyTitle: {
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    storyDescription: {
      color: '#666',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      margin: 0
    },
    storyImage: {
      textAlign: 'center'
    },
    values: {
      padding: '80px 0',
      background: '#f8f9fa'
    },
    valuesTitle: {
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '3rem'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    valueCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    valueTitle: {
      color: '#e74c3c',
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    valueDescription: {
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    }
  };

  return (
    <div style={styles.about}>
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>About Save The Orphans Africa</h1>
          <p style={styles.pageSubtitle}>Transforming lives through compassion and action since 2010</p>
        </div>
      </section>

      <section style={styles.story}>
        <div style={styles.container}>
          <div style={styles.storyContent}>
            <div style={styles.storyText}>
              <h2 style={styles.storyTitle}>Our Story</h2>
              <p style={styles.storyDescription}>
                Founded in 2010 by Dr. Amina Bello, Save The Orphans Africa began as a small 
                initiative in Nairobi, Kenya. After witnessing the devastating impact of poverty 
                and disease on children, Dr. Bello dedicated her life to creating safe havens 
                for the most vulnerable.
              </p>
              <p style={styles.storyDescription}>
                Today, we operate in 15 African countries, working with local communities to 
                provide comprehensive care and sustainable solutions for orphaned children.
              </p>
            </div>
            <div style={styles.storyImage}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                Our Story Image
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.values}>
        <div style={styles.container}>
          <h2 style={styles.valuesTitle}>Our Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Compassion</h3>
              <p style={styles.valueDescription}>
                We approach every child with empathy and understanding, recognizing their 
                unique needs and potential.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Transparency</h3>
              <p style={styles.valueDescription}>
                98% of every donation goes directly to our programs. We maintain open books 
                and regular reporting.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Sustainability</h3>
              <p style={styles.valueDescription}>
                We build programs that create lasting change, empowering communities to 
                support their children.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Excellence</h3>
              <p style={styles.valueDescription}>
                We maintain the highest standards in child care, education, and program 
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;