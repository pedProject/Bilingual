import type { FC } from "react";

import { Feedbacks } from "./components/feedbacks/Feedbacks";

export const App: FC = (): JSX.Element => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Feedbacks />
    </div>
  );
};
