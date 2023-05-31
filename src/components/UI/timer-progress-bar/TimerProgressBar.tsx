import { useEffect, useState } from "react";

import { styled } from "@mui/material";
import { Line } from "rc-progress";
import { type ProgressProps } from "rc-progress";

interface Props extends ProgressProps {
  duration: number;
}

export const TimerProgressBar = ({ duration, ...props }: Props) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const progress = (duration - remainingTime) / duration;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <>
      <StyledTimer>{formattedTime}</StyledTimer>
      <Line percent={progress * 100} strokeColor="#3A10E5" trailColor="#D4D0D0" {...props} />
    </>
  );
};

const StyledTimer = styled("p")(() => ({
  paddingBottom: "20px",
  fontWeight: "600",
  fontSize: "2rem",
  color: "#4C4859"
}));
