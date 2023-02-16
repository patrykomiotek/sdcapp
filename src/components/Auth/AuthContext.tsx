import { createContext } from 'react'

interface User {
  isLoggedIn: boolean;
  username: string;
}

export const AuthContext = createContext<User | null>(null);
