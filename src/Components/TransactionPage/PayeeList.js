// components/PayeeList.js
import React from 'react';

const payees = [
  { name: 'Alan', account: '20-10-56' },
  { name: 'Elliot', account: '21-81-32' },
  { name: 'Callum', account: '78-50-12' },
  { name: 'Ahsan', account: '20-12-78' },
];

const PayeeList = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Recent Payees</h2>
      {payees.map((payee, index) => (
        <div key={index} style={styles.payeeCard}>
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
