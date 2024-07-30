// Header.js
import React from 'react';
import skyLogo from '../TransactionPage/Skylogo.jpeg'; // Adjust the path as needed

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={skyLogo} alt="Sky Logo" style={styles.logo} />
        <h1>Welcome Elias</h1>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Pay</button>
        <button style={styles.button}>Add Payee</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    position: 'sticky', 
    top: 0, 
    zIndex: 1000, 
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '20px',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Header;
