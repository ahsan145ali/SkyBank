import React, { useState } from 'react';
import AddPayee from './AddPayee';
import PayPayee from './PayPayee';

const PayeeList = () => {
  const [payees, setPayees] = useState([]);
  const [recentPayees, setRecentPayees] = useState([]);
  const [showAddPayee, setShowAddPayee] = useState(false);
  const [showPayPayee, setShowPayPayee] = useState(false);
  const [selectedPayee, setSelectedPayee] = useState(null);
  const [balance, setBalance] = useState(5000);

  // Function to add a new payee
  const addPayee = (payee) => {
    setPayees([...payees, payee]);
    setShowAddPayee(false);
  };

  // Function to delete a payee
  const deletePayee = (payeeName) => {
    const filteredPayees = payees.filter(payee => payee.name !== payeeName);
    setPayees(filteredPayees);
    setRecentPayees(recentPayees.filter(p => p.name !== payeeName));
  };

  // Function to handle a payment
  const handlePayment = (amount, payeeName, reference) => {
    setBalance(balance - amount);
    const payee = payees.find(p => p.name === payeeName);
    if (payee) {
      setRecentPayees([payee, ...recentPayees.filter(p => p.name !== payeeName)]);
    }
    console.log(`Payment to ${payeeName}, Amount: $${amount}, Reference: ${reference}`);
    setShowPayPayee(false);
  };

  // Function to show the Add Payee form
  const handleShowAddPayee = () => {
    setShowAddPayee(true);
    setShowPayPayee(false);
  };

  // Function to show the Pay Payee form
  const handleShowPayPayee = (payeeName = null) => {
    setSelectedPayee(payeeName);
    setShowPayPayee(true);
    setShowAddPayee(false);
  };

  // Function to hide both forms
  const handleBack = () => {
    setShowAddPayee(false);
    setShowPayPayee(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={handleShowAddPayee} style={styles.button}>Add Payee</button>
        <button onClick={() => handleShowPayPayee()} style={styles.button}>Pay Payee</button>
      </div>
      {showAddPayee ? (
        <>
          <AddPayee onAddPayee={addPayee} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : showPayPayee ? (
        <>
          <PayPayee payees={payees} onPayment={handlePayment} selectedPayee={selectedPayee} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : (
        <>
          <h3 style={styles.balance}>Balance: ${balance}</h3>
          <h2 style={styles.header}>Recent Payees</h2>
          {recentPayees.map((payee, index) => (
            <div key={index} style={styles.payeeCard}>
              <h3 style={styles.payeeName}>{payee.name}</h3>
              <p style={styles.payeeAccount}>Sort Code: {payee.sortCode}</p>
              <p style={styles.payeeAccount}>Account Number: {payee.accountNumber}</p>
              <div style={styles.cardButtons}>
                <button onClick={() => handleShowPayPayee(payee.name)} style={styles.payButton}>Pay</button>
                <button onClick={() => deletePayee(payee.name)} style={styles.deleteButton}>Delete</button>
              </div>
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
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
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
  payButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default PayeeList;
