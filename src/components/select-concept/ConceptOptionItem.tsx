import { Box, IconButton, Radio, styled } from "@mui/material";

import { DeleteIcon } from "../../assets";

import type { OptionItem } from "../../types/testVerification";

type Props = OptionItem & {
  index: number;
};

export const ConceptOptionItem = ({ index, title, isTrue }: Props) => {
  return (
    <Card>
      <span>{index}</span>
      <OptionTitle>{title}</OptionTitle>
      <StyledRadio checked={isTrue} />
      <StyledIconButton>
        <DeleteIcon />
      </StyledIconButton>
    </Card>
  );
};

const Card = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  border: "1.53px solid #D4D0D0",
  width: "100%",
  borderRadius: "8px",
  padding: "0.875rem 1rem",
  gap: "1rem"
}));

const OptionTitle = styled("p")(() => ({
  fontFamily: "DINNextRoundedLTW01-Regular",
  color: "#4C4859",
  fontSize: "1rem",
  flex: "1",
  wordBreak: "break-all",
  marginLeft: "0.625rem"
}));

const StyledRadio = styled(Radio)(() => ({
  width: "20px",
  height: "20px",
  transform: "translate(50%, 0)"
}));

const StyledIconButton = styled(IconButton)(() => ({
  transform: "translate(20%, -22.5%)"
}));
