import { Box, styled } from "@mui/material";

// import { PlusIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import { Input } from "../../../components/UI/input/Input";

export const AddNewTest = () => {
  return (
    <StyledBox>
      <Box className="input-box">
        <Input id="title" label="Title" />
      </Box>

      <Box className="input-box">
        <Input id="short" label="Short Description" />
      </Box>

      <Box className="action-btns">
        <StyledBackBtn>GO BACK</StyledBackBtn>
        <StyledSaveBtn>SAVE</StyledSaveBtn>

        {/* {если инпуты заполнены && <StyledButton>
          <PlusIcon /> <p>ADD QUESTIONS</p>
        </StyledButton>} */}
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

// const StyledButton = styled(Button)(() => ({
//   "&.MuiButtonBase-root": {
//     padding: "12.5px 24px 12.5px 16px",
//     display: "flex",
//     gap: "15.5px"
//   }
// }));
