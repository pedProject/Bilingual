import { styled } from "@mui/material";

import { Header } from "../landing/components/Header";
import { Hero } from "../landing/sections/Hero";
import Statistics from "../landing/sections/Statistics";

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <Statistics />
      </StyledMain>
      {/* here must be Footer */}
    </>
  );
};

const StyledMain = styled("main")(() => ({
  background: "#FEF5E8"
}));
