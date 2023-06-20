import { forwardRef } from "react";
import type { ForwardedRef } from "react";

import { TextareaAutosize, styled } from "@mui/material";

import type { TextareaAutosizeProps } from "@mui/material";

interface ITextareaProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea = forwardRef(
  (
    { placeholder, value, onChange, ...props }: ITextareaProps & TextareaAutosizeProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <StyledTextarea
        {...props}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

Textarea.displayName = "Textarea";

const StyledTextarea = styled(TextareaAutosize)(() => ({
  padding: "0.8rem 1rem",
  width: "100%",
  outline: "none",
  resize: "none",
  background: "#FFFFFF",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.3rem",
  color: "#4C4859",
  caretColor: "#3A10E5",
  fontFamily: "DINNextRoundedLTW01-Regular",
  letterSpacing: "0.5px",
  "&:focus": {
    border: "1px solid #3A10E5"
  }
}));
