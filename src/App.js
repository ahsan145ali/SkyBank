// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { PayeeProvider } from './Components/TransactionPage/PayeeContext'; // Adjust the path
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
import AddPayee from './Components/TransactionPage/AddPayee';
import PayPayee from './Components/TransactionPage/PayPayee';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <AuthProvider>
          <PayeeProvider>
            <Header />
            <Routes>
              {/* <Route path='/' element={<Login/>}/>
              <Route path='/homepage' element={<Homepage />}/>
              <Route path='/dashboard' element={<Dashboard />}/> */}
              <Route path='/' element={<PayeeList/>}/>
              <Route path='/add-payee' element={<AddPayee />} />
              <Route path='/pay-payee' element={<PayPayee />} />
            </Routes>
          </PayeeProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
