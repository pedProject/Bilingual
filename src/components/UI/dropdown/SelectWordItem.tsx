import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../../assets";
import { IconButton } from "../Button/IconButton";
import { Checkbox } from "../checkbox/Checkbox";

type SelectWordItemProps = {
  title: string;
  withSound: boolean;
  indexNumber: number;
};

export default function SelectWordItem({ title, withSound, indexNumber }: SelectWordItemProps) {
  return (
    <Main key={1}>
      <Content>
        <span>{indexNumber}</span>

        {withSound && <IconButton icon={<VoiceIcon />} onClick={() => console.log("hello")} />}

        <span>{title}</span>
      </Content>
      <Actions>
        <Checkbox value={false} />

        <IconButton icon={<DeleteIcon />} onClick={() => console.log("hello")} />
      </Actions>
    </Main>
  );
}

const Main = styled("div")`
  width: 261px;
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
  & > span {
    max-width: 140px;
    word-wrap: break-word;
  }
`;
const Actions = styled("div")`
  display: flex;
  align-items: center;
  gap: 7px;
`;
