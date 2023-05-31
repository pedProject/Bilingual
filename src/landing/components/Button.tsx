import { styled, Button as MuiButton } from "@mui/material";

import { CurvedButtonBackground } from "../../assets";

import type { ButtonProps } from "@mui/material";

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton sx={{ backgroundImage: `url(${CurvedButtonBackground})` }}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(() => ({
  color: "#FFF",
  fontWeight: 700,
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  lineHeight: "1.3125rem",
  padding: "1rem 4.0625rem 1.4375rem",
  letterSpacing: "0.05em",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  backgroundSize: "contain",
  "&:hover": {
    backgroundColor: "transparent"
  }
}));

export default Button;
