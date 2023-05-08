import { TextField, styled } from "@mui/material";
import { FC } from "react";
import { INTERFACE_INPUTPROPS } from "../../../model/interfaces";

export const Input: FC<INTERFACE_INPUTPROPS> = ({
  value,
  onChange,
  error,
  ...props
}): JSX.Element => {
  return <InputStyled {...props} value={value} onChange={onChange} error={Boolean(error)} />;
};

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
