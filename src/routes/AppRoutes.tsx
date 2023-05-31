import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("../containers/Error.Page"));

import { LandingPage } from "../containers/Landing.Page";
import { Layout } from "../layout/Layout";
import { ROLES } from "../utils/constants/general";
import { ROUTES } from "../utils/constants/routes";

import { PrivateRoute } from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.ADMIN.INDEX,
    element: <PrivateRoute roles={ROLES.ADMIN} Component={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Admin</div>
      }
    ]
  },
  {
    path: ROUTES.CLIENT.INDEX,
    element: <PrivateRoute roles={ROLES.CLIENT} Component={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>User</div>
      },
      {
        path: ROUTES.CLIENT.TESTS,
        element: <div>Test page</div>
      }
    ]
  },
  {
    path: ROUTES.AUTH.INDEX,
    element: <div>Auth page</div>
  }
]);
