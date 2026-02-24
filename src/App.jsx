//src/App.jsx
import React, { Suspense, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { PrivateRoute } from "./components/PrivateRoute";
import usePageTitle from "./hooks/UsePageTitle";


// ✅ Normal imports for route arrays (functions)
import getAdminAuthRoutes from "./routes/adminAuthRoutes";
//import getUserAuthRoutes from "./routes/userAuthRoutes";

// ✅ Lazy load route groups for code-splitting (improves performance)
const AdminRoutes = React.lazy(() => import("./routes/AdminRoutes"));
const UserRoutes = React.lazy(() => import("./routes/UserRoutes"));


/**
 * App Component
 * ----------------------------------------------------
 * Handles dynamic route rendering for Admin & User
 * sections, authentication guards, and global setup.
 */
function App() {

  const location = useLocation();

  // ---------------- Redux Selectors ----------------
  const { admin, user } = useSelector((state) => state.auth);

  // ---------------- Token Retrieval ----------------
  const adminToken = admin?.token || localStorage.getItem("admin_auth_token");
  //const userToken = user?.token || localStorage.getItem("client_auth_token");

  // ---------------- Dynamic Auth Routes ----------------
  // useMemo ensures routes are recomputed only when token changes
  const adminAuthRoutes = useMemo(() => getAdminAuthRoutes(adminToken), [adminToken]);
  //const userAuthRoutes = useMemo(() => getUserAuthRoutes(userToken), [userToken]);

  // ---------------- Page Title Management ----------------
  usePageTitle(location.pathname.includes("client") ? "Client" : "Admin");

  // ---------------- Render ----------------
  return (
    <>
      {/* Global Toaster */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Suspense fallback while routes load */}
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          {/* 🔓 Public Admin Auth Routes */}
          {adminAuthRoutes.map(({ path, element }, index) => (
            <Route key={`admin-auth-${index}`} path={path} element={element} />
          ))}

          🔓 Public User Auth Routes
          {/* {userAuthRoutes.map(({ path, element }, index) => (
            <Route key={`user-auth-${index}`} path={path} element={element} />
          ))} */}

          {/* 🔐 Private Admin Routes */}
          <Route
            path="/*"
            element={
              <PrivateRoute
                isAuthenticated={!!adminToken}
                redirectTo="/login"
                element={<AdminRoutes />}
              />
            }
          />

          {/* 🔐 Private User Routes */}
          {/* <Route
            path="client/*"
            element={
              <PrivateRoute
                isAuthenticated={!!userToken}
                redirectTo="/client/login"
                element={<UserRoutes />}
              />
            }
          /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
