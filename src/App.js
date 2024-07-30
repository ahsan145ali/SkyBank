// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <PayeeList />
          <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/Payeelist' element={<PayeeList />} />
            <Route path='/homepage' element={<Homepage />} />
            
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
