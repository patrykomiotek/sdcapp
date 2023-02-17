import './App.css'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { store } from './store';
import { Provider as ReduxProvider } from 'react-redux';


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
import { ProductPage } from '@pages/ProductPage';

import { Menu } from '@molecules/Menu';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
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
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/boundary" element={<BoundaryPage />} />
                  <Route path="/viewport" element={<ViewportPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Router>
            </AuthProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </div>
  )
}

// export default App
export { App }
