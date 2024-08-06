// src/Context/PayeeContext.js
import React, { createContext, useState } from 'react';

export const PayeeContext = createContext();

export const PayeeProvider = ({ children }) => {
  const [payees, setPayees] = useState([]);
  const [recentPayees, setRecentPayees] = useState([]);

  const addPayee = (payee) => {
    setPayees([...payees, payee]);
  };

  const addRecentPayee = (name) => {
    const payee = payees.find(p => p.name === name);
    if (payee) {
      setRecentPayees([payee, ...recentPayees.filter(p => p.name !== name)]);
    }
  };

  return (
    <PayeeContext.Provider value={{ payees, recentPayees, addPayee, addRecentPayee }}>
      {children}
    </PayeeContext.Provider>
  );
};
