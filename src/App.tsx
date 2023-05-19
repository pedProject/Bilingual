import SelectWordItem from "./components/UI/Dropdown/SelectWordItem";
import { Wrapper } from "./components/UI/Wrapper";

export const App = (): JSX.Element => {
  return (
    <div>
      <h1>MyApp</h1>
      <SelectWordItem />
      <Wrapper>hello</Wrapper>
    </div>
  );
};
