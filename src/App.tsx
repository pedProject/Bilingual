import { Suspense } from "react";

import { RouterProvider } from "react-router-dom";

import { VoiceRecord } from "./components/TestComponents/testInProgress/voice-record/VoiceRecord";
import { routes } from "./routes/AppRoutes";

export const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback={<>...Loading</>}>
        <RouterProvider router={routes} />
      </Suspense>
      <VoiceRecord />
    </>
  );
};
