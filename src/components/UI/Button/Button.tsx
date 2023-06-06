import { Button as MuiButton, styled } from "@mui/material";

import type { ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)`
  background-color: #3a10e5;
  color: ${(p) => p.color || "#FFFFFF"};
`;
