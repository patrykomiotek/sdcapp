import { useState } from 'react'
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
import { AuthContext } from '@components/Auth/AuthContext';

function App() {
  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isLoggedIn: value,
        username: 'User #1'
      }}>
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
          <button onClick={() => setValue(
            (currentValue) => !currentValue
          )}>
            Toggle
          </button>

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
