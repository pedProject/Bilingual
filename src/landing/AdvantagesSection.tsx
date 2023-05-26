import type { FC } from "react";

import { styled } from "@mui/material";

import {
  FirstAdvantage,
  SecondAdvantage,
  ThirdAdvantage,
  FourthAdvantage,
  FifthAdvantage
} from "../assets";

import { AdvantagesList } from "./components/slider/AdvantagesList";

export const AdvantagesSection: FC = (): JSX.Element => {
  return (
    <Main>
      <h2>Learn more</h2>
      <AdvantagesList advantages={ADVANTAGES_DATA} />
    </Main>
  );
};

const ADVANTAGES_DATA = [
  {
    id: 1,
    title: "Expand your applicant pool",
    description:
      "Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have taken the Bilingual English Test because of its radical accessibility.",
    image: FirstAdvantage,
    imageSize: "320px",
    marginBottom: "20rem",
    gap: "18px"
  },
  {
    id: 2,
    title: "Built on the latest assessment   sciencee",
    description:
      "The Duolingo English Test is a computer adaptive test backed by rigorous research, with results that are highly correlated with other major assessments such as the TOEFL and the IELTS.",
    image: SecondAdvantage,
    imageSize: "320px",
    marginBottom: "17.75rem",
    gap: "125px"
  },
  {
    id: 3,
    title: "Innovative test security",
    description:
      "Industry-leading security protocols, individual test proctoring, and computer adaptive technology help prevent fraud and cheating and ensure results you can trust.",
    image: ThirdAdvantage,
    imageSize: "264px",
    marginBottom: "8rem",
    gap: "180px"
  },
  {
    id: 4,
    title: "Convenient results dashboard",
    description:
      "Access candidates certificates, video interviews, and writing samples through a free and secure dashboard. Quickly and easily view applicant data with filtering tools.",
    image: FourthAdvantage,
    imageSize: "320px",
    marginBottom: "12rem",
    gap: "185px"
  },
  {
    id: 5,
    title: "Secure Design",
    description:
      "Adaptive test engine dynamically administers test questions from a database of hundreds of thousands of items. Someone would have to take the test more than 1,000 times to see a question repeated.",
    image: FifthAdvantage,
    imageSize: "320px",
    marginBottom: "13.75rem",
    gap: "160px"
  }
];

const Main = styled("div")(() => ({
  background: "#FEF5E9",
  fontFamily: "Poppins, sans-serif",
  padding: "120px 80px 60px 80px",
  width: "100%",
  maxWidth: "1440px",

  h2: {
    fontFamily: "Gilroy, sans-serif",
    color: "#3752B4",
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "60px",
    padding: "0"
  }
}));
