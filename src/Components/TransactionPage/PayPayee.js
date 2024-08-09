import React, { useState, useEffect } from 'react';

const PayPayee = ({ onPayment, payees, selectedPayee }) => {
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (selectedPayee) {
      setPayee(selectedPayee);
    }
  }, [selectedPayee]);

  const handlePay = (e) => {
    e.preventDefault();
    if (payee && amount) {
      onPayment(parseFloat(amount), payee);
      alert(`Payment of $${amount} to ${payee} successful`);
      setPayee('');
      setAmount('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Pay Payee</h2>
      <form onSubmit={handlePay} style={styles.form}>
        <select
          value={payee}
          onChange={(e) => setPayee(e.target.value)}
          style={styles.select}
          required
        >
          <option value="">Select Payee</option>
          {payees.map((payee, index) => (
            <option key={index} value={payee.name}>{payee.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Pay</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    margin: '10px',
    padding: '10px',
    width: '80%',
    maxWidth: '300px',
  },
  input: {
    margin: '10px',
    padding: '10px',
    width: '80%',
    maxWidth: '300px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default PayPayee;
