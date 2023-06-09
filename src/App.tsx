import { Suspense } from "react";

import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/AppRoutes";

export const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<>...Loading</>}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};
