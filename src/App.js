import Homepage from './Homepage/Homepage.jsx';
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
           <Route path='/homepage' element={<Homepage />}/>
           </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
