import { Button as MuiButton, styled } from "@mui/material";

import type { ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)`
  &.MuiButtonBase-root {
    background-color: ${(p) => (p.variant === "outlined" ? "#fff" : "#3A10E5")};
    color: ${(p) => (p.variant === "outlined" ? "#3A10E5" : "#fff")};
  }
`;
