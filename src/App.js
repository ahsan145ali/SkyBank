import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider} from './Context/AuthContext';
import {UserProvider} from './Context/UserContext.js'; 
import PayeeList from './Components/TransactionPage/PayeeList';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login.js';
import './input.css'
import TransactionPage from './Transactions/TransactionPage.jsx';
import PrivateRoute from './Components/PrivateRoute.js';
import NotFoundPage from './Error Pages/NotFoundPage.jsx';
import UnauthorisedPage from './Error Pages/UnauthorisedPage.jsx';

function App() {
  return (

    <Router>
      <AuthProvider>
        <UserProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/Payeelist' element={<PayeeList />} />
            <Route path='/transactions' element={<TransactionPage />} />
          </Route>
          <Route path="/unauthorised" element={<UnauthorisedPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>

        </UserProvider>
      </AuthProvider>
    </Router>

  );
}

export default App;
