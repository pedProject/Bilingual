import { styled } from "@mui/material";

export const Partners = (): JSX.Element => {
  return (
    <>
      <StyledTitle>Partners</StyledTitle>
    </>
  );
};

const StyledTitle = styled("p")(() => ({
  textAlign: "center",
  fontFamily: "Gilroy",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "48px",
  color: "#3752B4",
  marginBottom: "40px"
}));
