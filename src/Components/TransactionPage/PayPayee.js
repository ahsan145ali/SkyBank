import React, { useState } from 'react';

const PayPayee = ({ onPayment, payees }) => {
  const [selectedPayee, setSelectedPayee] = useState('');
  const [amount, setAmount] = useState('');

  const handlePay = (e) => {
    e.preventDefault();
    if (selectedPayee && amount) {
      onPayment(parseFloat(amount), selectedPayee);
      alert(`Payment of $${amount} to ${selectedPayee} successful`);
      setSelectedPayee('');
      setAmount('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Pay Payee</h2>
      <form onSubmit={handlePay} style={styles.form}>
        <select
          value={selectedPayee}
          onChange={(e) => setSelectedPayee(e.target.value)}
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
