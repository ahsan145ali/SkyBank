// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useUserContext } from '../Context/UserContext';

const PrivateRoute = () => {
  const { contextToken } = useAuth();
  const {userDetails} = useUserContext();
  return userDetails ? <Outlet/> : <Navigate to="/unauthorised" />;
};

export default PrivateRoute;
