import { Header } from "../landing/components/Header";
import { Hero } from "../landing/sections/Hero";

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      {/* here must be Footer */}
    </>
  );
};
