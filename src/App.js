import Homepage from './Homepage/Homepage.jsx';
import Login from './LoginPage/Login';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
import Dashboard from './Dashboard/Dashboard.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Payeelist' element={<PayeeList/>}/>
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Transactions' element={<TransactionHistory />}/>
           </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
