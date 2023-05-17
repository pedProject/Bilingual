import React from "react";

import { Box, styled } from "@mui/material";
import { useLocation } from "react-router-dom";

import { ROUTE_PATHS } from "../routes";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const isRenderFooterOnScreen = pathname === ROUTE_PATHS.CLIENT.TESTS;

  return (
    <StyledContainer>
      {/* @TODO find a solution to display header on only a few pages */}
      <Header />
      <main>{children}</main>
      {isRenderFooterOnScreen ? <Footer /> : null}
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  "& > main": {
    flex: "1"
  }
}));
