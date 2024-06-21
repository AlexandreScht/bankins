import React,{ createContext,useContext,useMemo } from 'react';
import PrepareServices from '../services/index.js';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const services = PrepareServices();

  const contextValue = useMemo(() => {
    return {
      services,
    };
  }, [services]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(404, 'useAppContext must be used within an AppContextProvider');
  }
  return context;
}
