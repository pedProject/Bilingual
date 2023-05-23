import { styled, Button as MuiButton } from "@mui/material";

import type { ButtonProps } from "@mui/material";

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)(() => ({
  background:
    "linear-gradient(186.36deg, #CB4080 5.01%, #C93D7D 29.76%, #BD3172 55.4%, #AD1E60 94.99%)",
  boxShadow: "inset 4px -5px 0px rgba(255, 204, 191, 0.68)",
  color: "#FFF",
  fontWeight: 700,
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  lineHeight: "1.3125rem",
  padding: "1rem 4.0625rem 1.4375rem",
  letterSpacing: "0.05em",
  borderStartEndRadius: "30px",
  borderStartStartRadius: "30px",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px"
}));

export default Button;
