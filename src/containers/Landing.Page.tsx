import { styled } from "@mui/material";

import { Header } from "../landing/components/Header";
import { Accordions } from "../landing/components/accordions/Accordions";
import { AdvantagesSection } from "../landing/sections/AdvantagesSection";
import { Feedbacks } from "../landing/sections/Feedbacks";
import { Hero } from "../landing/sections/Hero";
import { Partners } from "../landing/sections/Partners";
import { Statistics } from "../landing/sections/Statistics";
import { Team } from "../landing/sections/Team";
import { UserExperience } from "../landing/sections/UserExperience";
import { Video } from "../landing/sections/Video";

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <Statistics />
        <UserExperience />
        <Team />
        <Video />
        <AdvantagesSection />
        <Feedbacks />
        <Partners />
      </StyledMain>
      <Accordions />
    </>
  );
};

const StyledMain = styled("main")(() => ({
  background: "#FEF5E8"
}));
