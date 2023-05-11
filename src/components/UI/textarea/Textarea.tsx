import { TextareaAutosize, styled } from "@mui/material";

import type { TextareaAutosizeProps } from "@mui/material";

interface ITextareaProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  placeholder,
  value,
  onChange
}: ITextareaProps & TextareaAutosizeProps): JSX.Element => {
  return (
    <StyledTextarea
      style={{ height: "131px" }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;

const StyledTextarea = styled(TextareaAutosize)(() => ({
  "&": {
    padding: "14px 0 0 14px",
    width: "100%",
    outline: "none",
    resize: "none",
    background: "#FFFFFF",
    border: "1px solid #D4D0D0",
    borderRadius: "8px",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#4C4859",
    caretColor: "#3A10E5",

    "&:focus": {
      border: "1px solid #3A10E5"
    }
  }
}));
