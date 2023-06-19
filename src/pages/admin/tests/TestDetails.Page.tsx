import { Box, styled } from "@mui/material";

import { PlusIcon, DeleteIcon, EditIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import Table from "../../../components/UI/Table/Table";
import { Switcher } from "../../../components/UI/switcher/Switcher";

const columns = [
  { id: "id", label: "#", align: "left" },
  { id: "name", label: "Name", align: "left" },
  { id: "duration", label: "Duration", align: "left" },
  { id: "questionType", label: "Question Type", align: "left" },
  { id: "icon", label: "", align: "left" }
];

const data = [
  {
    id: "1",
    name: "Select the real Englisg word in the list...",
    duration: "1min",
    questionType: "Select real English word",
    icon: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Switcher />

        <EditIcon />

        <DeleteIcon />
      </Box>
    )
  },
  {
    id: "2",
    name: "Select the real Englisg word in the list...",
    duration: "1min",
    questionType: "Select real English word",
    icon: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Switcher />

        <EditIcon />

        <DeleteIcon />
      </Box>
    )
  },
  {
    id: "3",
    name: "Select the real Englisg word in the list...",
    duration: "1min",
    questionType: "Select real English word",
    icon: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Switcher />

        <EditIcon />

        <DeleteIcon />
      </Box>
    )
  }
];

export const TestDetails = () => {
  return (
    <StyledContainer>
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

      <Table onHandleGetItems={() => console.log(1)} columns={columns} data={data} />

      <Box className="btn-add">
        <StyledBackBtn>GO BACK</StyledBackBtn>
      </Box>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)(() => ({
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
    borderBottom: "1.53px solid #D4D0D0",
    marginBottom: "24px"
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
