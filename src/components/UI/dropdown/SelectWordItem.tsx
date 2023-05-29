import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../../assets";
import { IconButton } from "../Button/IconButton";
import { Checkbox } from "../checkbox/Checkbox";

export default function SelectWordItem() {
  return (
    <Main key={1}>
      <Content>
        <span>{1}</span>

        <IconButton Icon={VoiceIcon} onClick={() => console.log("hello")} />

        <span>WORD {1}</span>
      </Content>
      <Actions>
        <Checkbox value={false} />

        <IconButton Icon={DeleteIcon} onClick={() => console.log("hello")} />
      </Actions>
    </Main>
  );
}

const Main = styled("div")`
  width: 80%;
  display: flex;
  align-items: center;
  border: 1.53px solid #d4d0d0;
  border-radius: 8px;
  padding: 8px;
`;

const Content = styled("div")`
  display: flex;
  align-items: center;
  gap: 13px;
  width: inherit;
`;
const Actions = styled("div")`
  display: flex;
  align-items: center;
  gap: 7px;
`;
