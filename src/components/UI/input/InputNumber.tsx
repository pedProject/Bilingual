import type { ComponentType } from "react";

import { PatternFormat } from "react-number-format";

import { Input } from "./Input";

import type { InputAttributes, PatternFormatProps } from "react-number-format";

type Props = PatternFormatProps;

export const InputNumber = ({ ...props }: Props & { label?: string }) => {
  return (
    <div>
      <PatternFormat {...props} customInput={Input as ComponentType<InputAttributes>} />
    </div>
  );
};
