# React Frontend (React + Vite)

React Frontend UI for authentication, role-based access control (RBAC), activity logs, and user management

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Redux Toolkit
- React Bootstrap + Bootstrap 5
- React Hook Form
- Framer Motion
- Axios

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+
- Backend API running locally (default: `http://localhost:8020/api/`)

## Environment Setup

This project uses `.env.development`.

Current keys:

```env
VITE_API_BASE_URL=http://localhost:8020/api/
VITE_ENV_NAME=development
VITE_SITE_NAME=CK
```

If your backend URL changes, update `VITE_API_BASE_URL`.

## Installation

```bash
npm install
```

## Run the App

Default Vite dev server:

```bash
npm run dev
```

Run on a custom port (example: `3060`) and auto-open browser:

```bash
npm run dev -- --port 3060 --open
```

## Build and Preview

Production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

Note: the repository currently contains existing lint issues in legacy/theme/vendor files, so lint may fail even when feature changes are correct.

## Routing Overview

Admin public auth routes:

- `/login`
- `/register`
- `/forgot-password`
- `/reset-password`
- `/register-success`

Admin private app routes (guarded):

- `/dashboard`
- `/user/*`
- `/module/*`
- `/activity-logs`

Guards and route config:

- Public route guard: `src/components/PublicRoute.jsx`
- Private route guard: `src/components/PrivateRoute.jsx`
- Admin auth routes: `src/routes/adminAuthRoutes.jsx`
- Admin app routes: `src/routes/adminRoutesConfig.jsx`

## Project Structure

```text
src/
  components/          # shared UI + route guards
  hooks/               # custom hooks (example: page title hook)
  pages/
    admin/             # admin auth, dashboard, modules, users
    user/              # user/client pages
    common/            # shared pages (errors, etc.)
  redux/               # slices, store, async actions
  routes/              # route group/config files
  utils/               # helpers, http client
```

## Notes for Development

- App entry routing is in `src/App.jsx`.
- API calls use a centralized HTTP utility in `src/utils/http`.
- Auth state relies on Redux and localStorage token fallback.

## Troubleshooting

- Blank page after login:
  - verify backend is reachable at `VITE_API_BASE_URL`
  - check browser console/network for 401/422/500 responses
- Route redirect loops:
  - confirm token keys in localStorage are valid for current role
- Port already in use:
  - run Vite on a different port:
    - `npm run dev -- --port 3061 --open`
# react-auth-rbac-admin-ui
