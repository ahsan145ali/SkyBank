import React, { useState } from 'react';

const AddPayee = ({ onAddPayee }) => {
  const [name, setName] = useState('');
  const [sortCode, setSortCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountNumber.length !== 8) {
      setError('Incorrect account number. It must be 8 digits long.');
      return;
    }
    if(sortCode.length !== 6){
      setError('Incorrect sort number. It must be 6 digits long.');
      return;
    }

    onAddPayee({ name, sortCode, accountNumber });
    setName('');
    setSortCode('');
    setAccountNumber('');
    setError('');
    alert('Payee added successfully');
  };

  return (
    <div className='tw-h-small md:tw-h-med lg:tw-h-large tw-p-5 tw-text-center'>
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
          value={sortCode}
          onChange={(e) => setSortCode(e.target.value)}
          minLength={6}
          maxLength={6}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          minLength={8}
          maxLength={8}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
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
  error: {
    color: 'red',
    marginTop: '10px',
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
