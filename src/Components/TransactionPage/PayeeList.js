// components/PayeeList.js
import React from 'react';

const payees = [
  { name: 'Alan', account: '20-10-56' },
  { name: 'Elliot', account: '21-81-32' },
  { name: 'Callum', account: '78-50-12' },
  { name: 'Ahsan', account: '20-12-78' },
];

const PayeeList = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {payees.map((payee, index) => (
        <div key={index} style={{ margin: '10px', padding: '20px', border: '1px solid #000', borderRadius: '5px' }}>
          <h2>{payee.name}</h2>
          <p>{payee.account}</p>
        </div>
      ))}
    </div>
  );
};

export default PayeeList;