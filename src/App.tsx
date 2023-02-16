import { useState, createContext } from 'react'
import './App.css'
// import { Button } from '@components/Button';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { AuthInfo } from '@components/Auth/AuthInfo';

import { Viewport } from '@components/Viewport';
import { Generator } from '@components/Generator';
import { LoginPage } from '@pages/LoginPage';

interface User {
  isLoggedIn: boolean;
  username: string;
}

const user1: User = {
  isLoggedIn: false,
  username: 'User #1'
}

export const AuthContext = createContext(user1);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthContext.Provider value={user1}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <AuthInfo />

          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

// export default App
export { App }
