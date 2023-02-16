import { useState, useContext, createContext } from 'react';

// 1️⃣ enum Theme
enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

// 2️⃣ interface ThemeContextType
interface ThemeContextType {
  theme: Theme;
  toggle(): void;
}

// 3️⃣ useTheme "internal hook"
const useTheme = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const toggle = () => theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
  return { theme, toggle };
}

// 4️⃣ useThemeContext "external hook"
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Component should be placed inside ThemeProvider');
  }
  return context;
}

// 5️⃣ ThemeContext
const ThemeContext = createContext<ThemeContextType | null>(null);

// 6️⃣ ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}