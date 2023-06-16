import { Button as MuiButton, styled } from "@mui/material";

import type { ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)`
  background-color: ${(p) => (p.variant === "outlined" ? "#fff" : "#3A10E5")};
  color: ${(p) => (p.variant === "outlined" ? "#3A10E5" : "#fff")};
  box-shadow: 0px 1px 2px rgba(58, 16, 229, 0.2), 0px 1px 2px rgba(58, 16, 229, 0.2);
  padding-right: 20px;
  padding-left: 20px;
`;
