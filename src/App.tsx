import type { FC } from "react";

import { Feedbacks } from "./components/feedbacks/Feedbacks";
import { Partners } from "./components/partners/Partners";

export const App: FC = (): JSX.Element => {
  return (
    <div
      style={{
        background: "#fef5e8"
      }}
    >
      <Feedbacks />
      <Partners />
    </div>
  );
};
