import { styled } from "@mui/material";

import {
  StatisticsAirplanesImage,
  StatisticsGlobeImage,
  StatisticsPiggyBanksImage
} from "../../assets";
import Container from "../../layout/Container";
import { SpacedSection } from "../components/SpacedSection";
import { StatisticItem } from "../components/StatisticItem";

import type { StatisticItem as StatisticItemType } from "../../types/statistics";

const DUMMY_STATISTICS: readonly StatisticItemType[] = [
  {
    id: "e1",
    description: `Over 10,000 fee waivers for the
        Bilingual English Test are offered annually.`,
    renderedCount: 10000,
    initialCount: 0,
    backgroundImage: StatisticsAirplanesImage,
    prefix: "+",
    prefixPosition: "right"
  },
  {
    id: "e2",
    description: `Students from over 200
    countries and territories have benefitted.`,
    renderedCount: 200,
    initialCount: 0,
    backgroundImage: StatisticsGlobeImage,
    prefix: "+",
    prefixPosition: "right"
  },
  {
    id: "e3",
    description: `Eligible students can take the
    test with absolutely zero cost to them.`,
    renderedCount: 0,
    initialCount: 100,
    backgroundImage: StatisticsPiggyBanksImage,
    prefix: "$",
    prefixPosition: "left"
  }
];

const Statistics = (): JSX.Element => {
  return (
    <SpacedSection id="statistics">
      <Container>
        <StatisticsContainer>
          {DUMMY_STATISTICS.map((statistic) => (
            <StatisticItem key={statistic.id} {...statistic} />
          ))}
        </StatisticsContainer>
      </Container>
    </SpacedSection>
  );
};

const StatisticsContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"
}));

export default Statistics;
