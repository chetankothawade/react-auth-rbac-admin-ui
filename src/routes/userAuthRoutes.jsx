// src/routes/userAuthRoutes.js
import React from "react";
import Register from '../pages/user/auth/Register';
import Login from '../pages/user/auth/Login';
import ForgotPassword from '../pages/user/auth/ForgotPassword';
import ResetPassword from '../pages/user/auth//ResetPassword';
import RegisterSuccess from '../pages/user/auth//RegisterSuccess';
import { PublicRoute } from '../components/PublicRoute';

// Accept token as an argument from outside (from App.js)
const getUserAuthRoutes = (userToken) => [
  {
    path: "/client/login",
    element: <PublicRoute isAuthenticated={!!userToken} redirectTo="/client/dashboard" element={<Login />} />
  },
  {
    path: "/client/register",
    element: <PublicRoute isAuthenticated={!!userToken} redirectTo="/client/dashboard" element={<Register />} />
  },
  {
    path: "/client/forgot-password",
    element: <PublicRoute isAuthenticated={!!userToken} redirectTo="/client/dashboard" element={<ForgotPassword />} />
  },
  {
    path: "/client/reset-password",
    element: <PublicRoute isAuthenticated={!!userToken} redirectTo="/client/dashboard" element={<ResetPassword />} />
  },
  {
    path: "/client/register-success",
    element: <PublicRoute isAuthenticated={!!userToken} redirectTo="/client/dashboard" element={<RegisterSuccess />} />
  }
];

export default getUserAuthRoutes;
