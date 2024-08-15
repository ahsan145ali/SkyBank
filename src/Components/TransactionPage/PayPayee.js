import React, { useState, useEffect } from 'react';

const PayPayee = ({ onPayment, payees, selectedPayee,userbalance}) => {
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');  // New state for reference
  useEffect(() => {
    if (selectedPayee) {
      setPayee(selectedPayee);
    }
  }, [selectedPayee]);

  const handlePay = (e) => {
    e.preventDefault();
    if(userbalance < amount){
      setAmount('');
      window.alert("Insufficient Balance");
    }
    else if (payee && amount) {
      onPayment(parseFloat(amount), payee, reference);  // Pass the reference to onPayment
      alert(`Payment of $${amount} to ${payee} successful. Reference: ${reference}`);
      setPayee('');
      setAmount('');
      setReference('');  // Clear reference field after payment
    }
  };
  

  return (
    <div className='tw-h-small md:tw-h-med lg:tw-h-large tw-p-5 tw-text-center'>
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
            <option key={index} value={payee.firstName}>{payee.firstName}</option>
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
        <input
          type="text"
          placeholder="Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          style={styles.input}
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
