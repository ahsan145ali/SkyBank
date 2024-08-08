// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = () => {
  const { contextToken } = useAuth();
  return contextToken ? <Outlet/> : <Navigate to="/" />;
};

export default PrivateRoute;
