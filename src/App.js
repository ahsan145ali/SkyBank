import logo from './logo.svg';
import './App.css';
import Login from './LoginPage/Login';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './Components/TransactionPage/Header';
import PayeeList from './Components/TransactionPage/PayeeList';
function App() {
  return (
    // <div>
    //   <Router>
    //     <AuthProvider>
    //       <Routes>
    //        <Route path='/' element={<Login/>}/>
           
    //        </Routes>
    //     </AuthProvider>
    //   </Router>
    // </div>
    <div className="App">
      <Header />
      <PayeeList />
    </div>
  );
}

export default App;
