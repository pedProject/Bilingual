import { Box, styled } from "@mui/material";

import { Button } from "../../../components/UI/Button/Button";
import { Input } from "../../../components/UI/input/Input";

export const AddNewTest = () => {
  return (
    <StyledBox>
      <Box className="input-box">
        <label htmlFor="title">Title</label>
        <Input id="title" />
      </Box>

      <Box className="input-box">
        <label htmlFor="short">Short Description</label>
        <Input id="short" />
      </Box>

      <Box className="action-btns">
        <StyledBackBtn>GO BACK</StyledBackBtn>
        <StyledSaveBtn>SAVE</StyledSaveBtn>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  background: "#FFFFFF",
  boxShadow: "0px 4px 39px rgba(196, 196, 196, 0.6)",
  borderRadius: "20px",
  margin: "68px 0 0 0",
  padding: "50px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "28px",

  "& .input-box": {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  "& .action-btns": {
    display: "flex",
    justifyContent: "end",
    flexWrap: "wrap",
    gap: "16px"
  }
}));

const StyledBackBtn = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    background: "#fff",
    color: "#3A10E5",
    padding: "12.5px 24px",
    border: "2px solid #3A10E5"
  }
}));

const StyledSaveBtn = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    background: "#2AB930",
    color: "#fff",
    padding: "12.5px 24px"
  }
}));
