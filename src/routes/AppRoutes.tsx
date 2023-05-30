import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { ErrorPage } from "../containers/Error.Page";
import { LandingPage } from "../containers/Landing.Page";
import { Layout } from "../layout/Layout";

import { PrivateRoute } from "./ProtectedRoutes";
import { ROUTE_PATHS } from "./routePaths";

export const routes = createBrowserRouter([
  {
    path: ROUTE_PATHS.LANDING.INDEX,
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTE_PATHS.ADMIN.INDEX,
    element: <PrivateRoute roles={["admin"]} Component={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
  {
    path: ROUTE_PATHS.CLIENT.INDEX,
    element: <PrivateRoute roles={["client"]} Component={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: ROUTE_PATHS.CLIENT.TESTS,
        element: <div>Test page</div>
      }
    ]
  },
  {
    path: ROUTE_PATHS.AUTH.INDEX,
    element: <div>Auth page</div>
  }
]);
