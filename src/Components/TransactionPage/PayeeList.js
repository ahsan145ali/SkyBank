import React, { useContext, useState } from 'react';
import { PayeeContext } from './PayeeContext';
import AddPayee from './AddPayee';
import PayPayee from './PayPayee';

const PayeeList = () => {
  const { recentPayees, payees, addRecentPayee } = useContext(PayeeContext);
  const [showAddPayee, setShowAddPayee] = useState(false);
  const [showPayPayee, setShowPayPayee] = useState(false);
  const [balance, setBalance] = useState(5000);

  const handleAddPayee = () => {
    setShowAddPayee(true);
    setShowPayPayee(false);
  };

  const handlePayPayee = () => {
    setShowPayPayee(true);
    setShowAddPayee(false);
  };

  const handleBack = () => {
    setShowAddPayee(false);
    setShowPayPayee(false);
  };

  const handlePayment = (amount, payeeName) => {
    setBalance(balance - amount);
    addRecentPayee(payeeName);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={handleAddPayee} style={styles.button}>Add Payee</button>
        <button onClick={handlePayPayee} style={styles.button}>Pay Payee</button>
      </div>
      {showAddPayee ? (
        <>
          <AddPayee />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : showPayPayee ? (
        <>
          <PayPayee onPayment={handlePayment} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : (
        <>
          <h3 style={styles.balance}>Balance: ${balance}</h3>
          <h2 style={styles.header}>Recent Payees</h2>
          {recentPayees.map((payee, index) => (
            <div key={index} style={styles.payeeCard} onClick={handlePayPayee}>
              <h3 style={styles.payeeName}>{payee.name}</h3>
              <p style={styles.payeeAccount}>{payee.account}</p>
            </div>
          ))}
        </>
      )}
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
  balance: {
    fontSize: '20px',
    color: '#007bff',
    margin: '20px 0',
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default PayeeList;
