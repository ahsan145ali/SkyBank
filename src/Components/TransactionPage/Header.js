// Header.js
import React from 'react';
import skyLogo from '../TransactionPage/Skylogo.jpeg'; // Adjust the path as needed

const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
      <img src={skyLogo} alt="Sky Logo" style={{ height: '40px', marginRight: '20px' }} />
      <h1>Welcome Elias</h1>
      <div style={{ marginLeft: 'auto', display: 'flex' }}>
        <button style={{ marginRight: '10px' }}>Pay</button>
        <button>Add Payee</button>
      </div>
    </div>
  );
};

export default Header;