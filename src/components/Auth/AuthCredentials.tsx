import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  const isLoggedIn = context.isLoggedIn;
  return (
    <div>
      <p>Is user logged? {isLoggedIn ? 'YES' : 'NO'}</p>
    </div>
  );
}