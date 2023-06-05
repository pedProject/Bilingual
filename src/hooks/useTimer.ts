import { useEffect, useState } from "react";

import { type ProgressBarProps } from "../components/UI/timer-progress-bar/TimerProgressBar";

const padTo2Digits = (number: number): string => {
  return String(number).padStart(2, "0");
};

export const useTimer = ({ duration, onTimeUp }: ProgressBarProps) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0 || prevTime <= 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1 * 0.05;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [onTimeUp]);

  const percent = (remainingTime / duration) * 100;
  const minutes = Math.trunc(remainingTime / 60);
  const seconds = Math.trunc(remainingTime % 60);
  const formattedTime = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;

  return { formattedTime, percent };
};
