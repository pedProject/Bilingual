import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";

import type { ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(MuiButton)`
  &.MuiButtonBase-root {
    background-color: #3a10e5;
    color: ${(p) => p.color || "#FFFFFF"};
  }
`;
