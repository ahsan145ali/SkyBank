import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PayeeList from './Components/TransactionPage/PayeeList';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import TransactionHistory from './Transactions/TransactionHistory.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login.js';
import './input.css';
function App() {
  var getToken = true;
  return (

    

      <Router>
        <Navbar/>
        <AuthProvider>
         
          <Routes>
           {getToken? <>
           <Route path='/' element={<Login/>}/>
           <Route path='/homepage' element={<Homepage />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/Payeelist' element={<PayeeList/>}/>

           <Route path='/transactions' element={<TransactionHistory/>}/>
           </>:<Route path='/' element={<Login />}/>}{!getToken && <Route to="/"/>}
           </Routes>


        </AuthProvider>
      </Router>

  );
}

export default App;
