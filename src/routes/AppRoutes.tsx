import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("../containers/Error.Page"));

import { LandingPage } from "../containers/Landing.Page";
import { Layout } from "../layout/Layout";
import { NewTest } from "../pages/admin/tests/NewTest.Page";
import { TestDetails } from "../pages/admin/tests/TestDetails.Page";
import { Tests } from "../pages/admin/tests/Tests.Page";
import { ROLES } from "../utils/constants/general";
import { ROUTES } from "../utils/routes";

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
      },

      {
        path: ROUTES.ADMIN.TESTS,
        element: <Tests />
      },

      {
        path: ROUTES.ADMIN.NEW_TEST,
        element: <NewTest />
      },

      {
        path: ROUTES.ADMIN.TEST_DETAILS,
        element: <TestDetails />
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
