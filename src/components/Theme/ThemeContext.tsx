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
  const [theme, setTheme] = useState(Theme.DARK);
  const toggle = () => {
    if (theme === Theme.LIGHT) {
      document.body.classList.remove('light');
      setTheme(Theme.DARK)
    } else {
      document.body.classList.add('light');
      setTheme(Theme.LIGHT)
    }
    // theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT)
  }
  return { theme, toggle };
}

// 4️⃣ ThemeContext
const ThemeContext = createContext<ThemeContextType | null>(null);

// 5️⃣ useThemeContext "external hook"
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Component should be placed inside ThemeProvider');
  }
  return context;
}

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