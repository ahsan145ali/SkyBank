import React, { useState, useEffect } from 'react';
import AddPayee from './AddPayee';
import PayPayee from './PayPayee';

const PayeeList = () => {
  const [payees, setPayees] = useState([]);
  const [recentPayees, setRecentPayees] = useState([]);
  const [showAddPayee, setShowAddPayee] = useState(false);
  const [showPayPayee, setShowPayPayee] = useState(false);
  const [balance, setBalance] = useState(5000);

  useEffect(() => {
    const storedPayees = localStorage.getItem('payees');
    const storedRecentPayees = localStorage.getItem('recentPayees');
    if (storedPayees) setPayees(JSON.parse(storedPayees));
    if (storedRecentPayees) setRecentPayees(JSON.parse(storedRecentPayees));
  }, []);

  useEffect(() => {
    localStorage.setItem('payees', JSON.stringify(payees));
  }, [payees]);

  useEffect(() => {
    localStorage.setItem('recentPayees', JSON.stringify(recentPayees));
  }, [recentPayees]);

  const addPayee = (payee) => {
    setPayees([...payees, payee]);
    setShowAddPayee(false);
  };

  const handlePayment = (amount, payeeName) => {
    setBalance(balance - amount);
    const payee = payees.find(p => p.name === payeeName);
    if (payee) {
      setRecentPayees([payee, ...recentPayees.filter(p => p.name !== payeeName)]);
    }
    setShowPayPayee(false);
  };

  const handleShowAddPayee = () => {
    setShowAddPayee(true);
    setShowPayPayee(false);
  };

  const handleShowPayPayee = () => {
    setShowPayPayee(true);
    setShowAddPayee(false);
  };

  const handleBack = () => {
    setShowAddPayee(false);
    setShowPayPayee(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={handleShowAddPayee} style={styles.button}>Add Payee</button>
        <button onClick={handleShowPayPayee} style={styles.button}>Pay Payee</button>
      </div>
      {showAddPayee ? (
        <>
          <AddPayee onAddPayee={addPayee} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : showPayPayee ? (
        <>
          <PayPayee payees={payees} onPayment={handlePayment} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : (
        <>
          <h3 style={styles.balance}>Balance: ${balance}</h3>
          <h2 style={styles.header}>Recent Payees</h2>
          {recentPayees.map((payee, index) => (
            <div key={index} style={styles.payeeCard} onClick={handleShowPayPayee}>
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
