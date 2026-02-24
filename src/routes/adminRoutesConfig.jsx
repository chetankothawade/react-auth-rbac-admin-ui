//routes/adminRoutesConfig.js
import React from 'react';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import { Create, Edit, List, View, Profile } from '../pages/admin/users';
import { CreateModule, EditModule, ListModule, ViewModule, ModuleAccess, RoleModuleAccess } from '../pages/admin/modules';
import { ListActivityLogs } from '../pages/admin/activityLogs';

import { Page404, Page500, Page403 } from '../pages/common/errors/Index';
import ProtectedRoute from '../components/ProtectedRoute';

export const adminRoutes = [
  // Dashboard
  { path: "/", element: <Dashboard />, exact: true },
  { path: "/dashboard", element: <Dashboard /> },

  // User Routes
  { path: "/user", element: <ProtectedRoute element={<List />} permission="view" module="Users" /> },
  { path: "/user/create", element: <ProtectedRoute element={<Create />} permission="create" module="Users" /> },
  { path: "/user/edit/:uuid", element: <ProtectedRoute element={<Edit />} permission="edit" module="Users" /> },
  { path: "/user/view/:uuid", element: <ProtectedRoute element={<View />} permission="view" module="Users" /> },
  { path: "/user/profile/:uuid", element: <ProtectedRoute element={<Profile />} permission="view" module="Users" /> },

  // Modules Routes 
  { path: "/module", element: <ProtectedRoute element={<ListModule />} permission="view" module="Modules" /> },
  { path: "/module/:uuid", element: <ProtectedRoute element={<ListModule />} permission="view" module="Modules" /> },
  { path: "/module/create", element: <ProtectedRoute element={<CreateModule />} permission="create" module="Modules" /> },
  { path: "/module/edit/:uuid", element: <ProtectedRoute element={<EditModule />} permission="edit" module="Modules" /> },
  { path: "/module/view/:uuid", element: <ProtectedRoute element={<ViewModule />} permission="view" module="Modules" /> },
  { path: "/module/permission", element: <ModuleAccess /> },
  { path: "/module/permission/:uuid", element: <ModuleAccess /> },
  { path: "/module/permission/role", element: <RoleModuleAccess /> },

  // Activity Logs
  { path: "/activity-logs", element: <ProtectedRoute element={<ListActivityLogs />} permission="view" module="Activity Logs" /> },

  // Catch-all
  { path: "*", element: <Page404 /> },
  { path: "/server_error", element: <Page500 /> },
  { path: "/forbidden", element: <Page403 /> },
];
