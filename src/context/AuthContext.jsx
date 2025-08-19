/**
 * AuthContext manages the user's authentication state by storing a token,
 * It provides functions for the user to register, log in, and log out,
 * all of which update the token in state.
 */
import { createContext, useContext, useState } from 'react';
import { API } from './ApiContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const register = async (credentials) => {
    const response = await fetch(API + '/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    setToken(result.token);
    setUser(result.user);
  };

  const login = async (credentials) => {
    const response = await fetch(API + '/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    setToken(result.token);
    setUser(result.user);

    console.log(result.message);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const value = { token, user, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error('useAuth must be used within AuthProvider');
  return context;
};
