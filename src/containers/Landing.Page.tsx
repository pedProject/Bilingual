import { styled } from "@mui/material";

import { Header } from "../landing/components/Header";
import { Hero } from "../landing/sections/Hero";
import Statistics from "../landing/sections/Statistics";
import { Team } from "../landing/sections/Team";
import { UserExperience } from "../landing/sections/UserExperience";

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <Statistics />
        <UserExperience />
        <Team />
      </StyledMain>
      {/* here must be Footer */}
    </>
  );
};

const StyledMain = styled("main")(() => ({
  background: "#FEF5E8"
}));
