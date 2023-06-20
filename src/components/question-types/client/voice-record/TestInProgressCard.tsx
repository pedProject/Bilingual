import type { ReactNode } from "react";

import { styled } from "@mui/material";

import { TimerProgressBar } from "../../../UI/timer-progress-bar/TimerProgressBar";

import { RecordSaying } from "./RecordSaying";

type Props = {
  title: string;
  children: ReactNode;
};
export const TestInprogressCard = ({ title, children }: Props) => {
  return (
    <Container>
      <TimerProgressBar onTimeUp={() => console.log("test")} duration={20} />
      <Title>{title}</Title>
      <Content>{children}</Content>
      <BottomContainer>
        <RecordSaying />
      </BottomContainer>
    </Container>
  );
};

const Container = styled("div")`
  width: 57rem;
  height: 568px;
  background-color: #fff;
  padding-left: 43px;
  padding-right: 43px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Title = styled("h2")`
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 32px;
  color: #4c4859;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

const Content = styled("div")`
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled("div")`
  border-top: 1.53px solid #d4d0d0;
  margin: 32px 0px 40px 0px;
  width: 50.8rem;
  margin-top: 121px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
