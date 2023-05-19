import React from "react";

import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")`
  background: #ffffff;
  box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
  border-radius: 20px;
  padding: 60px;
`;
