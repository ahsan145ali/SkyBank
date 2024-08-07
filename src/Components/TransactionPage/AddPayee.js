// AddPayee.js
import React, { useState, useContext } from 'react';
import { PayeeContext } from './PayeeContext';

const AddPayee = () => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const { addPayee } = useContext(PayeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPayee({ name, account });
    setName('');
    setAccount('');
    alert('Payee added successfully');
  };

  return (
    <div style={styles.container}>
      <h2>Add Payee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Sort Code"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Add</button>
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

export default AddPayee;
