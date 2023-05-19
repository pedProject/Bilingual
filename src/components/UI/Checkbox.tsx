import { forwardRef } from "react";
import type { Ref } from "react";

import { Checkbox as MuiCheckbox } from "@mui/material";

import { CheckedIcon, UnCheckedIcon } from "./../../assets/index";

import type { CheckboxProps } from "@mui/material";

export const Checkbox = forwardRef(
  (
    { value, onChange, ...props }: CheckboxProps & { value: boolean },
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
