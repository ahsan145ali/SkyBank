import './App.css';
import Login from './LoginPage/Login';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
           <Route path='/' element={<Login/>}/>
           </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
