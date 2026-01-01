import React from 'react';

const OurWork = () => {
  const programs = [
    {
      title: "Education for All",
      description: "Providing quality education, school supplies, and scholarships to ensure every child can learn and grow.",
      impact: "2,500+ children in school"
    },
    {
      title: "Healthcare Access",
      description: "Medical care, nutrition programs, and health education to keep children healthy and strong.",
      impact: "15,000+ medical treatments provided"
    },
    {
      title: "Safe Shelter",
      description: "Building and maintaining safe, loving homes where children can heal and thrive.",
      impact: "1,200+ children housed"
    },
    {
      title: "Community Development",
      description: "Working with local communities to create sustainable support systems for vulnerable children.",
      impact: "50+ communities engaged"
    }
  ];

  const styles = {
    ourWork: {
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
    programs: {
      padding: '80px 0',
      background: 'white'
    },
    sectionTitle: {
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '3rem'
    },
    programsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    programCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderTop: '4px solid #e74c3c'
    },
    programTitle: {
      color: '#2c3e50',
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    programDescription: {
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    programImpact: {
      background: '#f8f9fa',
      padding: '0.8rem',
      borderRadius: '5px',
      color: '#e74c3c',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    successStories: {
      padding: '80px 0',
      background: '#f8f9fa'
    },
    storiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    storyCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    storyImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(45deg, #3498db, #2980b9)',
      borderRadius: '8px',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    storyTitle: {
      color: '#2c3e50',
      fontSize: '1.3rem',
      marginBottom: '1rem'
    },
    storyDescription: {
      color: '#666',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.ourWork}>
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Our Work</h1>
          <p style={styles.pageSubtitle}>Creating lasting change through comprehensive programs</p>
        </div>
      </section>

      <section style={styles.programs}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Programs</h2>
          <div style={styles.programsGrid}>
            {programs.map((program, index) => (
              <div key={index} style={styles.programCard}>
                <h3 style={styles.programTitle}>{program.title}</h3>
                <p style={styles.programDescription}>{program.description}</p>
                <div style={styles.programImpact}>{program.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.successStories}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Success Stories</h2>
          <div style={styles.storiesGrid}>
            <div style={styles.storyCard}>
              <div style={styles.storyImage}>Sarah's Journey</div>
              <h4 style={styles.storyTitle}>Sarah's Journey</h4>
              <p style={styles.storyDescription}>
                From orphaned at 6 to medical school graduate, Sarah's story inspires us every day.
              </p>
            </div>
            <div style={styles.storyCard}>
              <div style={styles.storyImage}>David's Hope</div>
              <h4 style={styles.storyTitle}>David's Hope</h4>
              <p style={styles.storyDescription}>
                Found wandering the streets, now a confident young man studying engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;