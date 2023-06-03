import { Suspense } from "react";

// import { RouterProvider } from "react-router-dom";

// import { routes } from "./routes/AppRoutes";

import { CreateTestForm } from "./components/create-test-form/CreateTestForm";

export const App = (): JSX.Element => {
  return (
    <Suspense fallback={<>...Loading</>}>
      {/* <RouterProvider router={routes} /> */}
      <CreateTestForm />
    </Suspense>
  );
};
