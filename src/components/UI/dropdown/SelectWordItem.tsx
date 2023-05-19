import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../../assets";
import { Checkbox } from "../Checkbox";

export default function SelectWordItem() {
  return (
    <Main key={1}>
      <Content>
        <span>{1}</span>
        <VoiceIcon />
        <span>WORD {1}</span>
      </Content>
      <Actions>
        <Checkbox value={false} />
        <DeleteIcon />
      </Actions>
    </Main>
  );
}

const Main = styled("div")`
  width: 240px;
  display: flex;
  align-items: center;
  border: 1.53px solid #d4d0d0;
  border-radius: 8px;
  padding: 8px;
  gap: 30px;
`;

const Content = styled("div")`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const Actions = styled("div")`
  display: flex;
  align-items: center;
  gap: 7px;
`;
