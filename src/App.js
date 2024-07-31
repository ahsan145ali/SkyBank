import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import PayeeList from './Components/TransactionPage/PayeeList';
import Navbar from './Navbar/Navbar.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'
import Footer from './Footer/Footer.js';
import './input.css'

function App() {
  return (
      <Router>
        {/* <Navbar/> */}
        <AuthProvider>
          <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/homepage' element={<Homepage />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/Payeelist' element={<PayeeList/>}/>
           <Route path='/transactions' element={<TransactionHistory/>}/>
           </Routes>
        </AuthProvider>
        
      </Router>
  );
}

export default App;
