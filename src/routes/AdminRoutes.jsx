import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { adminRoutes } from './adminRoutesConfig';

function AdminRoutes() {
  return (
    <Routes>
      {adminRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
export default AdminRoutes;

