import { InnerTestPage } from "./containers/admin/words/InnerTestPage";
// import { TestPage } from "./pages/words/TestPage";

export const App = (): JSX.Element => {
  return (
    <div>
      <h1>MyApp</h1>
      <InnerTestPage />
      {/* <TestPage /> */}
    </div>
  );
};
