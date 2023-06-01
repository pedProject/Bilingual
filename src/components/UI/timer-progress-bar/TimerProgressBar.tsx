import { Box, styled } from "@mui/material";
import { Line } from "rc-progress";
import { type ProgressProps } from "rc-progress";

import { useTimer } from "../../../hooks/useTimer";

export interface ProgressBarProps {
  duration: number;
  onTimeUp: () => void;
}

export const TimerProgressBar = ({
  onTimeUp,
  duration = 0,
  ...props
}: ProgressBarProps & ProgressProps) => {
  const { formattedTime, percent } = useTimer({ duration, onTimeUp });

  return (
    <StyledBox>
      <p>{formattedTime}</p>
      <Line percent={percent} strokeColor="#3A10E5" trailColor="#D4D0D0" {...props} />
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  "& > p": {
    marginBottom: "20px",
    fontWeight: "600",
    fontSize: "2rem",
    color: "#4C4859"
  }
}));
