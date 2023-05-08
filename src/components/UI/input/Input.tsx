import React, { forwardRef, Ref } from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const Input = forwardRef(
  (
    { value, onChange, error, ...props }: IInputProps & TextFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <InputStyled
        {...props}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        inputRef={ref}
      />
    );
  }
);

Input.displayName = "Input";

const InputStyled = styled(TextField)(() => ({
  width: "100%",

  "& input:focus": {
    caretColor: "#3A10E5"
  },

  "& input:click": {
    caretColor: "#3A10E5"
  },

  "& .MuiInputLabel-root:active": {
    color: "#757575"
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
    border: "1px solid #3A10E5"
  },

  "& .MuiOutlinedInput-root:focus": {
    borderColor: "transparent",
    border: "1px solid #3A10E5"
  },

  "& .MuiOutlinedInput-root:error": {
    borderColor: "transparent",
    border: "1px solid #F61414"
  },

  "& .MuiInputBase-root": {
    borderRadius: "8px",

    "& .MuiInputBase-input": {
      height: "52px",
      padding: "0",
      paddingLeft: "20px"
    }
  }
}));
