import type { FC } from "react";

import { styled } from "@mui/material";

import { AdvantagesList } from "../components/AdvantagesList";

export const AdvantagesSection: FC = (): JSX.Element => {
  return (
    <Main>
      <h2>Learn more</h2>
      <AdvantagesList />
    </Main>
  );
};

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
