import { sliderImages } from "./assets";
import { Slider } from "./landing/components/slider/Slider";
export const App = (): JSX.Element => {
  return (
    <div>
      <h1>MyApp</h1>
      <Slider images={sliderImages} />
    </div>
  );
};
