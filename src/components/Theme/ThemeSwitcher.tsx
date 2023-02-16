import { useThemeContext } from '@components/Theme/ThemeContext';

export const ThemeSwitcher = () => {
  const themeContext = useThemeContext();

  return (
    <div>
      <p>Theme {themeContext.theme}</p>
      <button onClick={() => themeContext.toggle()}>Toggle</button>
    </div>
  );
}