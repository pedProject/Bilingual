import { styled } from "@mui/material";

import { getFileName } from "../../../utils/helpers/general";

type FileNameProps = {
  file: File;
  spaceLeft?: boolean;
  maxWidth?: string;
};

export const FileName = ({
  file,
  spaceLeft = true,
  maxWidth = "300"
}: FileNameProps): JSX.Element => {
  const fileName = getFileName(file);
  return (
    <StyledFileName spaceLeft={spaceLeft} maxWidth={maxWidth}>
      <abbr title={fileName}>{fileName}</abbr>
    </StyledFileName>
  );
};

const StyledFileName = styled("span")<Pick<FileNameProps, "spaceLeft" | "maxWidth">>(
  ({ spaceLeft, maxWidth }) => ({
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: maxWidth ? `${maxWidth}px` : "300px",
    fontFamily: "DINNextRoundedLTW01-Regular",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#4C4859",
    marginLeft: spaceLeft ? "1.125rem" : "0",
    "& > abbr": {
      textDecoration: "none"
    }
  })
);
