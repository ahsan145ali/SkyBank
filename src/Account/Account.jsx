// components/PayeeList.js
import React from 'react';

const account = [
  { name: 'Callum'},
];

const PayeeList = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {payees.map((account, index) => (
        <div key={index} style={{ margin: '10px', padding: '20px', border: '1px solid #000', borderRadius: '5px' }}>
          <h2>{payee.name}</h2>
          <p>{payee.account}</p>
        </div>
      ))}
    </div>
  );
};

export default PayeeList;