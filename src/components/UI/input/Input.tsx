import { forwardRef } from "react";
import type { Ref } from "react";

import { InputLabel, TextField, styled } from "@mui/material";

import type { TextFieldProps } from "@mui/material";

export const Input = forwardRef(
  ({ label, error, ...props }: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    return (
      <InputWrapper>
        <InputLabel>{label}</InputLabel>
        <InputStyled {...props} error={Boolean(error)} inputRef={ref} fullWidth />
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

const InputWrapper = styled("div")`
  width: 100%;
  & .MuiFormLabel-root {
    margin-bottom: 8px;
    font-family: "DINNextRoundedLTPro-Bold";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    color: #4b4759;
    white-space: pre-line;
  }
`;

const InputStyled = styled(TextField)(() => ({
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
    width: "100%",

    "& .MuiInputBase-input": {
      height: "52px",
      padding: "0",
      paddingLeft: "20px"
    }
  }
}));
