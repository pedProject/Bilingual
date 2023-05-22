import { Box, styled } from "@mui/material";

import { PlusIcon } from "../../../assets";
import { Button } from "../../../components/UI/button/Button";

export const InnerTests = () => {
  return (
    <StyledBox>
      <Box className="texts">
        <p className="title">Take a free practice test and estimate your score</p>
        <p className="short">Select real English words </p>
        <p className="duration">15:00</p>
      </Box>

      <Box className="btn-add">
        <StyledButton>
          <PlusIcon /> <p>ADD MORE QUESTIONS</p>
        </StyledButton>
      </Box>

      <p className="line"> </p>

      <Box className="btn-add">
        <StyledBackBtn>GO BACK</StyledBackBtn>
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

  "& .texts": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",

    "& .title:before": {
      content: "'Title: '",
      color: "#3752B4"
    },

    "& .short:before": {
      content: "'Short Description: '",
      color: "#3752B4"
    },

    "& .duration:before": {
      content: "'Duration: '",
      color: "#3752B4"
    }
  },

  "& .btn-add": {
    display: "flex",
    justifyContent: "end"
  },

  "& .line": {
    borderBottom: "1.53px solid #D4D0D0"
  }
}));

const StyledButton = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    padding: "12.5px 24px 12.5px 16px",
    display: "flex",
    gap: "15.5px",
    margin: "44px 0 22px"
  }
}));

const StyledBackBtn = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    marginTop: "32px",
    background: "#fff",
    color: "#3A10E5",
    padding: "12.5px 24px",
    border: "2px solid #3A10E5"
  }
}));
