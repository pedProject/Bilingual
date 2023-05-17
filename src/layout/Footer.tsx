import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { LogoIcon } from "../assets";

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter component={"footer"}>
      <Link to="/">
        <StyledLogoIcon />
      </Link>
      <Typography className="copyright">© 2023 Peaksoft</Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "12px",
  padding: "1.625rem",
  background: "#FFFFFF",
  "& .copyright": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "0.935rem",
    color: "#98A2B3",
    position: "relative",
    top: "3px"
  }
}));

const StyledLogoIcon = styled(LogoIcon)(() => ({
  maxWidth: "98px",
  maxHeight: "26.57px"
}));
