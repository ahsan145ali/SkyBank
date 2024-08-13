import {React,useContext,useState,createContext} from 'react'

// Create a Context for the Auth
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  const storeUserDetails = (loggedInUser) => {
    setUserDetails(loggedInUser);
  };

  return (
    <UserContext.Provider value={{ userDetails, storeUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useUserContext = () => {
  return useContext(UserContext);
};

