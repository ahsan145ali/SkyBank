import React, { createContext, useState, useContext } from 'react';

// Create a Context for the Auth
const AuthContext = createContext(null);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [contextToken, setContextToken] = useState(null);

  const storeContextToken = (newToken) => {
    setContextToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ contextToken, storeContextToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
