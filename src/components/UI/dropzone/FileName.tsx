import { styled } from "@mui/material";

import { getFileName } from "../../../utils/helpers/general";

export const FileName = ({ file }: { file: File }): JSX.Element => {
  const fileName = getFileName(file);
  return (
    <StyledFileName>
      <abbr title={fileName}>{fileName}</abbr>
    </StyledFileName>
  );
};

const StyledFileName = styled("span")(() => ({
  display: "inline-block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "300px",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontWeight: 400,
  fontSize: "1rem",
  color: "#4C4859",
  marginLeft: "2px",
  "& > abbr": {
    textDecoration: "none"
  }
}));
