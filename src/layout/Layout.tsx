import { Box, styled } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

import { ROUTE_PATHS } from "../routes/routePaths";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  const { pathname } = useLocation();

  const isRenderFooterOnScreen = pathname === ROUTE_PATHS.CLIENT.TESTS;

  return (
    <StyledContainer>
      {/* @TODO find a solution to display header on only a few pages */}
      <Header />
      <Outlet />
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
