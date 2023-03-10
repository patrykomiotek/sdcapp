import { useState, createContext, useContext } from 'react'

interface User {
  isLoggedIn: boolean;
  username: string;
}

interface UserContext extends User {
  logIn(): void;
  logOut(): void;
  toggle(): void;
  setUsername(name: string): void;
}

const useAuth = () => {
  const [state, setState] = useState<User>({ isLoggedIn: false, username: '' });

  const logIn = () => setState({
    ...state,
    isLoggedIn: true,
  });

  const logOut = () => setState({
    ...state,
    isLoggedIn: false,
  });

  const toggle = () => setState({
    ...state,
    isLoggedIn: !state.isLoggedIn,
  });

  const setUsername = (name: string) => setState({
    ...state,
    username: name,
  });

  return { ...state, logIn, logOut, toggle, setUsername };
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // const { state, logIn, logOut, toggle, setUsername } = useAuth();
  return (
    <AuthContext.Provider value={useAuth()}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthContext = createContext<UserContext | null>(null);
// AuthContext.displayName = 'Trololo';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Oh no! useAuthContext should be wrapped in AuthProvider');
  }
  return context;
}