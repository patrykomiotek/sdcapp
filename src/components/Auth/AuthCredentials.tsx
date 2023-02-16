import { useAuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const authContext = useAuthContext();
  const isLoggedIn = authContext.isLoggedIn;

  return (
    <div>
      <p>Is user logged? {isLoggedIn ? 'YES' : 'NO'}</p>
      <button onClick={() => authContext.toggle()}>Toggle</button>
    </div>
  );
}