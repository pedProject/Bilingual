import { useEffect } from "react";
import type { FC } from "react";

export const App: FC = (): JSX.Element => {
  useEffect(() => {
    console.log("Hello");
  }, []);
  return <div />;
};
