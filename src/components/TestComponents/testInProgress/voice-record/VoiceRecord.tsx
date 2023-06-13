import { styled } from "@mui/material";

import { VoiceRecordIcon } from "../../../../assets";
import { TestInprogressCard } from "../TestInProgressCard";
export const VoiceRecord = () => {
  return (
    <Container>
      <TestInprogressCard title={"Record yorself saying the statement below:"}>
        <Container>
          <VoiceRecordIcon />
          <Title>{`"${"My uncle is at work."}"`}</Title>
        </Container>
      </TestInprogressCard>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
`;

const Title = styled("h3")`
  font-size: 18px;
  line-height: 124%;
  color: #4c4859;
`;
