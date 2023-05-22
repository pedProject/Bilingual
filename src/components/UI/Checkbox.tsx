import { forwardRef } from "react";
import type { Ref } from "react";

import { Checkbox as MuiCheckbox } from "@mui/material";

import { CheckedIcon, UnCheckedIcon } from "./../../assets/index";

import type { CheckboxProps } from "@mui/material";

export const Checkbox = forwardRef(
<<<<<<< HEAD
  ({ value, onChange, ...props }: CheckboxProps, ref: Ref<HTMLInputElement>): JSX.Element => {
=======

  (
    { value, onChange, ...props }: CheckboxProps & { value: boolean },
    ref: Ref<HTMLInputElement>
  ): JSX.Element => {

>>>>>>> bc88fbe02412bc6157ba9fc09816107cab46258e
    return (
      <MuiCheckbox
        {...props}
        checkedIcon={<CheckedIcon />}
        icon={<UnCheckedIcon />}
        value={value}
        inputRef={ref}
        onChange={onChange}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
