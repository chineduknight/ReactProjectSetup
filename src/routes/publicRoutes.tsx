import { Navigate } from "react-router-dom";
import WithSuspense from "components/HOC/WithSuspense";
import { PUBLIC_PATHS, PROTECTED_PATHS } from "./pagePath";
import { lazy } from "react";

const Login = WithSuspense(lazy(() => import("pages/Login")));

const { LOGIN } = PUBLIC_PATHS;

const PUBLIC_ROUTES = [
  { path: LOGIN, element: <Login /> },
  { path: "/", element: <Login /> },
  // this enables you not to access the public routes when logged in
  ...Object.values(PROTECTED_PATHS).map((route) => {
    return {
      path: route,
      element: <Navigate to="/" />,
    };
  }),
  { path: "*", element: <div>Page not found</div> },
];

export default PUBLIC_ROUTES;
