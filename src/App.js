// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage.jsx'
import Login from './LoginPage/Login.js'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <AuthProvider>
         { /* <Header /> */}
          <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/homepage' element={<Homepage />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/Payeelist' element={<PayeeList/>}/>
           </Routes>
        </AuthProvider>
        
      </Router>
    </div>
  );
}

export default App;
