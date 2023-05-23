import { useEffect, useState } from "react";

import { Box, styled } from "@mui/material";

import { LandingLogoIcon } from "../../assets";
import { Button } from "../../components/UI/Button/Button";
import Container from "../../layout/Container";

export const Header = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const isScreenScrolled = scrollY > 0;

  useEffect(() => {
    setScrollY(0);
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <StyledHeader className={isScreenScrolled ? "_is-scrolled" : ""}>
      <Container>
        <InnerContainer>
          <StyledLogoIcon />
          <HeadingActions>
            <Button className="button">To come in</Button>
            <Button className="button _light">Register</Button>
          </HeadingActions>
        </InnerContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  padding: "1.5rem 0",
  position: "fixed",
  top: 0,
  left: "50%",
  width: "100%",
  transform: "translateX(-50%)",
  zIndex: 999,
  transition: "background 0.2s linear",
  "&._is-scrolled": {
    background: "#fff"
  }
}));

const InnerContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "1%",
  flexWrap: "wrap",
  height: "100%"
}));

const StyledLogoIcon = styled(LandingLogoIcon)(() => ({
  minWidth: "234.87px",
  minHeight: "48px"
}));

const HeadingActions = styled(Box)(() => ({
  "& > .button": {
    fontFamily: "DINNextRoundedLTPro-Bold",
    padding: "0.78rem 1.5rem",
    borderRadius: "0.5rem",
    letterSpacing: "0.02em",
    "&:active": {
      background: "#3007DA"
    },
    "&:hover": {
      background: "#3A10E5E5"
    },
    "&._light": {
      background: "#FFFFFF",
      color: "#4C4C4C",
      boxShadow: "0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)",
      marginLeft: "1.5rem"
    },
    boxShadow: "0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2;"
  }
}));
