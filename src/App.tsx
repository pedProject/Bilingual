/* eslint-disable prettier/prettier */
import type { FC } from "react";

import { Accordions } from "./components/UI/Accordions";

export const App: FC = (): JSX.Element => {
  return (
    <div>
      <h1>MyApp</h1>
      <Accordions />
    </div>
  );
};
