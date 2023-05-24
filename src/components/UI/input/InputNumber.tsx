import type { ComponentType } from "react";

import styled from "@emotion/styled";
import { PatternFormat } from "react-number-format";

import { Input } from "./Input";

import type { InputAttributes, PatternFormatProps } from "react-number-format";

type Props = PatternFormatProps;

export const InputNumber = ({ ...props }: Props & { label?: string }) => {
  return (
    <StyledContainer>
      <PatternFormat {...props} customInput={Input as ComponentType<InputAttributes>} />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")`
  width: 99px;
`;
