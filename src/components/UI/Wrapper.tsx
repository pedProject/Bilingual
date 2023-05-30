import React from "react";

import { styled } from "@mui/material";

type Props = {
  children: React.ReactNode;
  width?: string;
};

export const Wrapper = ({ children, width }: Props) => {
  return <Container width={width as string}>{children}</Container>;
};

const Container = styled("div")<{ width: string }>`
  background: #ffffff;
  box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
  border-radius: 20px;
  padding: 50px;
  width: ${(p) => p.width};
  max-width: 1440px;
`;
