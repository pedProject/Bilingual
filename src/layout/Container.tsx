import { Box, styled } from "@mui/material";

const Container = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled(Box)(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
  height: "100%",
  width: "83.3%"
}));

export default Container;
