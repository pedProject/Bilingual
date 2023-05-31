import { Box, styled } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

import { ROUTES } from "../utils/routes";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  const { pathname } = useLocation();

  const isRenderFooterOnScreen = pathname === ROUTES.CLIENT.INDEX;

  return (
    <StyledContainer>
      {/* @TODO find a solution to display header on only a few pages */}
      <Header />
      <main>
        <Outlet />
      </main>

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
