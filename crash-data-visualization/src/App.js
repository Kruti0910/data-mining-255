import React from 'react';
import './App.css';

function App() {

  const styles = {
    container: {
      margin: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#2c3e50',
    },
    section: {
      marginBottom: '40px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    subHeading: {
      fontSize: '1.8rem',
      marginBottom: '15px',
      color: '#34495e',
    },
    iframe: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '100%',
      height: '800px',
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>San Jose Crash Data Visualizations</h1>
      
      {/* Streamlit Dashboard Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Streamlit Dashboard</h2>
        <iframe
          src="https://crash-data-appgit-4enwupzvwgrpq9ifkpryhz.streamlit.app/?embed=true"
          width="100%"
          height="800"
          title="Streamlit Dashboard"
          style={styles.iframe}
          allowFullScreen
        ></iframe>
      </section>
      
      {/* Looker Studio Report Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Looker Studio Report</h2>
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/6bcbd323-a0b6-45cc-95fc-77823671f213/page/p_eyohzbeaqd"
          width="100%"
          height="800"
          title="Looker Studio Report"
          style={styles.iframe}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </section>
    </div>
  );
}

export default App;