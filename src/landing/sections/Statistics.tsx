/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material";

const DUMMY_STATISTICS = [
  {
    id: "e1",
    description: `Over 10,000 fee waivers for the
        Bilingual English Test are offered annually.`,
    renderedCount: "10,000",
    initialCount: "0"
  }
];

const Statistics = (): JSX.Element => {
  console.log(DUMMY_STATISTICS);

  return (
    <StyledSection id="statistics">
      <div />
      <div />
      <div />
    </StyledSection>
  );
};

const StyledSection = styled("section")(() => ({}));

export default Statistics;
