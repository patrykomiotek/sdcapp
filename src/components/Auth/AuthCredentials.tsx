import { useAuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const context = useAuthContext();

  const isLoggedIn = context.isLoggedIn;
  return (
    <div>
      <p>Is user logged? {isLoggedIn ? 'YES' : 'NO'}</p>
      <button onClick={() => context.toggle()}>Toggle</button>
    </div>
  );
}