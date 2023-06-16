import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../assets";
import { IconButton } from "../UI/Button/IconButton";

type SelectWordItemProps = {
  title: string;
  sound?: HTMLAudioElement | null;
  indexNumber: number;
};

export default function SelectWordItem({ title, sound, indexNumber }: SelectWordItemProps) {
  const handlePlay = () => {
    sound?.play();
  };

  const handleDeleteItem = () => {
    console.log("delete");
  };

  return (
    <Main>
      <Content>
        <span>{indexNumber + 1}</span>
        <IconButton icon={<VoiceIcon />} onClick={handlePlay} />
        <span>{title}</span>
      </Content>
      <IconButton icon={<DeleteIcon />} onClick={handleDeleteItem} />
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

  > :last-child {
    margin-left: auto;
  }
`;

const Content = styled("div")`
  width: inherit;

  > span {
    max-width: 97px;
    word-wrap: break-word;
    text-transform: uppercase;
  }
`;
