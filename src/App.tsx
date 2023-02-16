import './App.css'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import { AuthPage } from '@pages/AuthPage';
import { ThemePage } from '@pages/ThemePage';
import { GeneratorPage } from '@pages/GeneratorPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { ProductsPage } from '@pages/ProductsPage';
import { BoundaryPage } from '@pages/BoundaryPage';
import { ViewportPage } from '@pages/ViewportPage';

import { Menu } from '@molecules/Menu';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <Menu />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/generator" element={<GeneratorPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/theme" element={<ThemePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/boundary" element={<BoundaryPage />} />
              <Route path="/viewport" element={<ViewportPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

// export default App
export { App }
