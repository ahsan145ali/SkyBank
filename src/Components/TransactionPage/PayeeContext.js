// src/Components/TransactionPage/PayeeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const PayeeContext = createContext();

export const PayeeProvider = ({ children }) => {
  const [payees, setPayees] = useState([]);
  const [recentPayees, setRecentPayees] = useState([]);

  useEffect(() => {
    const storedPayees = localStorage.getItem('payees');
    const storedRecentPayees = localStorage.getItem('recentPayees');
    if (storedPayees) setPayees(JSON.parse(storedPayees));
    if (storedRecentPayees) setRecentPayees(JSON.parse(storedRecentPayees));
  }, []);

  useEffect(() => {
    localStorage.setItem('payees', JSON.stringify(payees));
  }, [payees]);

  useEffect(() => {
    localStorage.setItem('recentPayees', JSON.stringify(recentPayees));
  }, [recentPayees]);

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
