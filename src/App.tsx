import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { Button } from '@components/Button';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import { Generator } from '@components/Generator';
import { LoginPage } from '@pages/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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

        <Routes>
          <Route path="/" element={<Generator />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

// export default App
export { App }
