import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("../containers/Error.Page"));

import { LandingPage } from "../containers/Landing.Page";
import { Layout } from "../layout/Layout";
import { AddNewTest } from "../pages/admin/tests/AddNewTest";
import { AddQuestionToTest } from "../pages/admin/tests/AddQuestionToTest";
import { InnerTest } from "../pages/admin/tests/InnerTest";
import { Tests } from "../pages/admin/tests/Tests";
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
        path: "tests-page",
        element: <Tests />
      },
      {
        path: "new-test",
        element: <AddNewTest />
      },
      {
        path: "new-question",
        element: <AddQuestionToTest />
      },
      {
        path: "inner-test",
        element: <InnerTest />
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
