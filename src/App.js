// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { PayeeProvider } from './Components/TransactionPage/PayeeContext'; // Adjust the path
import Header from './Components/TransactionPage/Header';
<<<<<<< HEAD

=======
>>>>>>> 2ca1f0dc98a5c589e1a412c04f15b78bded2562f
import PayeeList from './Components/TransactionPage/PayeeList';
import AddPayee from './Components/TransactionPage/AddPayee';
import PayPayee from './Components/TransactionPage/PayPayee';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import TransactionHistory from './Transactions/TransactionHistory.jsx'
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login.js';
// import './input.css'


function App() {
  return (
      <Router>
        <Navbar/>
        <AuthProvider>
          
          <PayeeProvider>
            {/* <Header /> */}
            <Routes>
              {/* <Route path='/' element={<Login/>}/>
              <Route path='/homepage' element={<Homepage />}/>
              <Route path='/dashboard' element={<Dashboard />}/> */}
              <Route path='/' element={<PayeeList/>}/>
              <Route path='/add-payee' element={<AddPayee />} />
              <Route path='/pay-payee' element={<PayPayee />} />
            </Routes>
          </PayeeProvider>

          <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/homepage' element={<Homepage />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/Payeelist' element={<PayeeList/>}/>

           </Routes>

        </AuthProvider>
      </Router>
  );
}

export default App;
