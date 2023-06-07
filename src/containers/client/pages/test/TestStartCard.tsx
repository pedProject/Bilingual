import { styled } from "@mui/material";

import {
  TestStartIcon,
  TestStartCompIcon,
  TestStartTimeIcon,
  TestStartInfoIcon
} from "../../../../assets";
import { Button } from "../../../../components/UI/Button/Button";

type Props = {
  onCancel: () => void;
  onPractice: () => void;
  time: string | number;
};

export const TestStartCard = ({ onCancel, onPractice, time }: Props) => {
  return (
    <Container>
      <Title>Take a free practice test and estimate your score</Title>
      <InfoContainer>
        <TestStartIcon />
        <InfoMainBlock>
          <InfoBlocks>
            <TestStartCompIcon />
            <Paragraph>See what the test is like *</Paragraph>
          </InfoBlocks>
          <InfoBlocks>
            <TestStartTimeIcon />
            <Paragraph>Practice takes just {time} minutes</Paragraph>
          </InfoBlocks>
          <InfoBlocks>
            <TestStartInfoIcon />
            <Paragraph>Get an unofficial score estimate</Paragraph>
          </InfoBlocks>
        </InfoMainBlock>
      </InfoContainer>
      <Subtitle>
        * The practice test may include question types that may not appear on the certified test.
      </Subtitle>
      <ButtonContainer>
        <Button variant="outlined" onClick={onCancel}>
          CANCEL
        </Button>
        <Button onClick={onPractice}>PRACTICE TEST</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled("div")`
  width: 56.2rem;
  height: 549px;
  background: #ffffff;
  box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
  border-radius: 10px;
  padding-top: 35px;
  margin: 0 auto;
`;

const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 59px;
  width: 35rem;
`;

const Paragraph = styled("p")`
  font-weight: 400;
  font-size: 18px;
  line-height: 124%;
  letter-spacing: 0.02em;
  color: #4c4859;
  margin: 0px 0px 26px 20px;
`;

const Subtitle = styled("h3")`
  font-weight: 400;
  font-size: 16px;
  line-height: 124%;
  color: #4c4859;
  text-align: center;
  margin-top: 92px;
  margin-bottom: 60px;
`;
const InfoBlocks = styled("div")`
  display: flex;
`;

const InfoMainBlock = styled("div")`
  margin-top: 12px;
`;
const Title = styled("h1")`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: #4c4859;
  text-align: center;
`;
const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 50.7rem;
  margin: 0 auto;
  border-top: 1.53px solid #d4d0d0;
  padding-top: 28px;
`;
