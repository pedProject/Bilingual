import { styled } from "@mui/material";

import { Accordions } from "../components/Accordions";
import { Header } from "../landing/components/Header";
import { AdvantagesSection } from "../landing/sections/AdvantagesSection";
import { Hero } from "../landing/sections/Hero";
import { Statistics } from "../landing/sections/Statistics";
import { Team } from "../landing/sections/Team";
import { UserExperience } from "../landing/sections/UserExperience";
import { Video } from "../landing/sections/Video";
import { Feedbacks } from "../landing/sections/feedbacks/Feedbacks";
import { Partners } from "../landing/sections/partners/Partners";

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
