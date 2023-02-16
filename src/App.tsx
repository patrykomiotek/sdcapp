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
import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
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
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

// export default App
export { App }
