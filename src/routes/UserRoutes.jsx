import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { userRoutes } from './userRoutesConfig';

function UserRoutes() {
  return (
    <Routes>
      {userRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default UserRoutes;
