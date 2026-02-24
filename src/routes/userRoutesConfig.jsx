// userRoutesConfig.js
import Dashboard from '../pages/user/dashboard/Dashboard';
import { ListInvoice, ViewInvoice, PrintInvoice } from '../pages/user/invoices'
import { ProfileClient } from '../pages/user/clients';
import { Page404, Page500, Page403 } from '../pages/common/errors/Index';

export const userRoutes = [
  { path: "", element: <Dashboard />, exact: true },
  { path: "dashboard", element: <Dashboard /> },



  { path: "profile/:uuid", element: <ProfileClient /> },

  // Catch-all
  { path: "*", element: <Page404 /> },
  { path: "server_error", element: <Page500 /> },
  { path: "forbidden", element: <Page403 /> },
];
