import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../assets";
import { IconButton } from "../UI/Button/IconButton";

type SelectWordItemProps = {
  title: string;
  withSound: boolean;
  indexNumber: number;
};

export default function SelectWordItem({ title, withSound, indexNumber }: SelectWordItemProps) {
  return (
    <Main key={1}>
      <Content>
        <span>{indexNumber + 1}</span>

        {withSound && <IconButton icon={<VoiceIcon />} onClick={() => console.log("here i am")} />}

        <span>{title}</span>
      </Content>
      <div>
        <IconButton icon={<DeleteIcon />} onClick={() => console.log("hello")} />
      </div>
    </Main>
  );
}

const Main = styled("div")`
  width: 232px;
  display: flex;
  align-items: center;
  border: 1.53px solid #d4d0d0;
  border-radius: 8px;
  padding: 6px;

  div {
    display: flex;
    align-items: center;
  }
`;

const Content = styled("div")`
  width: inherit;
  span {
    max-width: 97px;
    word-wrap: break-word;
    text-transform: uppercase;
  }
`;
