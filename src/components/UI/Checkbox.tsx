import React, { forwardRef } from "react";
import type { Ref } from "react";

import { Checkbox as MuiCheckbox } from "@mui/material";

import { CheckedIcon, UnCheckedIcon } from "./../../assets/index";

import type { CheckboxProps } from "@mui/material";

type Props = {
  value: boolean | undefined;
  onChange: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Checkbox = forwardRef(
  (
    { value, onChange, ...props }: Props & CheckboxProps,
    ref: Ref<HTMLInputElement>
  ): JSX.Element => {
    return (
      <MuiCheckbox
        {...props}
        checkedIcon={<CheckedIcon />}
        icon={<UnCheckedIcon />}
        checked={value}
        inputRef={ref}
        onChange={onChange}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
