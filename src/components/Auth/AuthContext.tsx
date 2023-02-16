import { createContext } from 'react'

interface User {
  isLoggedIn: boolean;
  username: string;
}

const user1: User = {
  isLoggedIn: false,
  username: 'User #1'
}

export const AuthContext = createContext(user1);
