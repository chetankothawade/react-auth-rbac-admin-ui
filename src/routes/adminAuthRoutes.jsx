// src/routes/adminAuthRoutes.js
import React from "react";
import Register from '../pages/admin/auth/Register';
import Login from '../pages/admin/auth/Login';
import ForgotPassword from '../pages/admin/auth/ForgotPassword';
import ResetPassword from '../pages/admin/auth//ResetPassword';
import RegisterSuccess from '../pages/admin/auth//RegisterSuccess';
import { PublicRoute } from '../components/PublicRoute';

const getAdminAuthRoutes = (admin_token) => [
  {
    path: "login",
    element: <PublicRoute isAuthenticated={!!admin_token} redirectTo="/dashboard" element={<Login />} />
  },
  {
    path: "register",
    element: <PublicRoute isAuthenticated={!!admin_token} redirectTo="/dashboard" element={<Register />} />
  },
  {
    path: "forgot-password",
    element: <PublicRoute isAuthenticated={!!admin_token} redirectTo="/dashboard" element={<ForgotPassword />} />
  },
  {
    path: "reset-password",
    element: <PublicRoute isAuthenticated={!!admin_token} redirectTo="/dashboard" element={<ResetPassword />} />
  },
  {
    path: "register-success",
    element: <PublicRoute isAuthenticated={!!admin_token} redirectTo="/dashboard" element={<RegisterSuccess />} />
  }
];

export default getAdminAuthRoutes;
