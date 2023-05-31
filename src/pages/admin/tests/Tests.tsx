import { Box, styled } from "@mui/material";

import { PlusIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";

import { TestsItem } from "./TestsItem";

const data = [
  { id: 1, testName: "Test number 1 " },
  { id: 2, testName: "Test number 2 " }
];

interface ITestProps {
  id: number;
  testName: string;
}

export const Tests = () => {
  return (
    <StyledBox>
      <StyledButton>
        <PlusIcon /> <p>ADD NEW TEST</p>
      </StyledButton>

      <Box className="tests-box">
        {data.map((test: ITestProps) => (
          <TestsItem {...test} key={test.id} />
        ))}
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  background: "#FFFFFF",
  boxShadow: "0px 4px 39px rgba(196, 196, 196, 0.6)",
  borderRadius: "20px",
  padding: "50px 80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",

  "& .tests-box": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",

    "& .test": {
      background: "#FFFFFF",
      boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)",
      borderRadius: "8px",
      width: "100%",
      padding: "23px 18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",

      "& .action": {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "25px"
      }
    }
  }
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: "8px",
  height: "42px",
  padding: "12px 24px 12px 16px",
  display: "flex",
  gap: "15.5px",
  margin: "0 0 25px 0"
}));
