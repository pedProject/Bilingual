import { Button as MuiButton, styled } from "@mui/material";

import type { ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)(({ variant }) => {
  return {
    backgroundColor: variant === "outlined" ? "#fff" : "#3A10E5",
    color: variant === "outlined" ? "#3A10E5" : "#fff",
    boxShadow: "0px 1px 2px rgba(58, 16, 229, 0.2), 0px 1px 2px rgba(58, 16, 229, 0.2)",
    paddingRight: "20px",
    paddingLeft: "20px",
    fontFamily: "DINNextRoundedLTPro-Bold",
    "&:hover": {
      backgroundColor: variant === "outlined" ? "#fff" : "#3A10E5",
      color: variant === "outlined" ? "#3A10E5" : "#fff"
    }
  };
});
