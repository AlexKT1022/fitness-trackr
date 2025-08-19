/**
 * PageContext manages which page the application is currently on.
 * The different routes are defined in <App>.
 */

import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState('activities');
  const value = { page, setPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw Error('usePage must be used within PageProvider');
  return context;
};
