import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import { PatternFormat } from "react-number-format";

import { Input } from "./Input";

import type { InputAttributes, PatternFormatProps } from "react-number-format";

type Props = PatternFormatProps;

const InputNumber = forwardRef<HTMLInputElement, Props & { label?: string | React.ReactNode }>(
  function InputNumber({ ...props }, ref) {
    return (
      <StyledContainer>
        <PatternFormat
          {...props}
          customInput={Input as React.ComponentType<InputAttributes>}
          getInputRef={ref}
        />
      </StyledContainer>
    );
  }
);

const StyledContainer = styled("div")`
  width: 99px;
`;

export { InputNumber };
