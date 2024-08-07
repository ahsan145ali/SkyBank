import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { PayeeProvider } from './Components/TransactionPage/PayeeContext';
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login.js';
import './input.css';

function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <PayeeProvider>
          <Header />
          <Routes>
            <Route path='/Payeelist' element={<PayeeList />} />
          </Routes>
        </PayeeProvider>
        {/* 
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Payeelist' element={<PayeeList />} />
          <Route path='/transactions' element={<TransactionHistory />} />
        </Routes>
        */}
      </AuthProvider>
    </Router>
  );
}

export default App;
