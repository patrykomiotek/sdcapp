import { useAuthContext } from './AuthContext';
import { useThemeContext } from '@components/Theme/ThemeContext';

export const AuthCredentials = () => {
  const authContext = useAuthContext();
  const themeContext = useThemeContext();

  const isLoggedIn = authContext.isLoggedIn;
  return (
    <>
      <div>
        <p>Is user logged? {isLoggedIn ? 'YES' : 'NO'}</p>
        <button onClick={() => authContext.toggle()}>Toggle</button>
      </div>
      <div>
        <p>Theme {themeContext.theme}</p>
        <button onClick={() => themeContext.toggle()}>Toggle</button>
      </div>
    </>
  );
}