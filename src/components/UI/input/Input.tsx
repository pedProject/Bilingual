import { forwardRef } from "react";
import type { Ref, HTMLAttributes } from "react";

import { InputLabel, TextField, styled } from "@mui/material";

import type { StyledComponent } from "@emotion/styled";
import type { TextFieldProps } from "@mui/material";

interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

export const Input = forwardRef(
  ({ label, error, fullWidth = true, ...props }: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    return (
      <InputWrapper fullWidth={fullWidth}>
        <InputLabel className="label">{label}</InputLabel>
        <InputStyled
          {...props}
          InputProps={{ classes: { root: "input-wrapper", input: "input" }, ...props.InputProps }}
          error={Boolean(error)}
          inputRef={ref}
          fullWidth
        />
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

const InputWrapper = styled("div")<InputWrapperProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  & .MuiFormLabel-root {
    margin-bottom: 0.75rem;
    font-family: "DIN Next";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    color: #4b4759;
    white-space: pre-line;
  }
` as StyledComponent<InputWrapperProps>;

const InputStyled = styled(TextField)(() => ({
  "& .input-wrapper": {
    height: "46px"
  },
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
    border: "1.53px solid #3A10E5"
  },

  "& .MuiOutlinedInput-root:focus": {
    borderColor: "transparent",
    border: "1.53px solid #3A10E5"
  },

  "& .MuiOutlinedInput-root:error": {
    borderColor: "transparent",
    border: "1.53px solid #F61414"
  },

  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "100%",

    "& .MuiInputBase-input": {
      padding: "0",
      paddingLeft: "20px"
    }
  }
}));
