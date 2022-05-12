import WithSuspense from "components/HOC/WithSuspense";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { PROTECTED_PATHS, PUBLIC_PATHS } from "./pagePath";

const Dashboard = WithSuspense(lazy(() => import("pages/Dashboard")));

const { DASHBOARD } = PROTECTED_PATHS;

const PROTECTED_ROUTES = [
  { path: DASHBOARD, element: <Dashboard /> },
  { path: "/", element: <Navigate to={DASHBOARD} /> },
  // this enables you not to access the public routes when logged in
  ...Object.values(PUBLIC_PATHS).map((route) => {
    return {
      path: route,
      element: <Navigate to="/" />,
    };
  }),
  { path: "*", element: <div>Page not found</div> },
];

export default PROTECTED_ROUTES;
