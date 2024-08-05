// PayeeList.js
import React, { useContext } from 'react';
import { PayeeContext } from './PayeeContext'; 
import { useNavigate } from 'react-router-dom';

const PayeeList = () => {
  const { recentPayees } = useContext(PayeeContext);
  const navigate = useNavigate();

  const handlePayeeClick = (payee) => {
    navigate('/pay-payee', { state: { payee } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Recent Payees</h2>
      {recentPayees.map((payee, index) => (
        <div key={index} style={styles.payeeCard} onClick={() => handlePayeeClick(payee)}>
          <h3 style={styles.payeeName}>{payee.name}</h3>
          <p style={styles.payeeAccount}>{payee.account}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
  },
  payeeCard: {
    margin: '10px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '80%',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  payeeName: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  payeeAccount: {
    margin: 0,
    fontSize: '16px',
    color: '#555',
  },
};

export default PayeeList;
