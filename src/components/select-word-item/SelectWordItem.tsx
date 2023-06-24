import { styled } from "@mui/material";

import { DeleteIcon, VoiceIcon } from "../../assets";
import { IconButton } from "../UI/Button/IconButton";

import type { modalData } from "../create-option-modal/CreateOptionModal";

type SelectWordItemProps = {
  options: modalData[];
  setOptions: React.Dispatch<React.SetStateAction<modalData[]>>;
};

export default function SelectWordItem({ options, setOptions }: SelectWordItemProps) {
  const handlePlay = (audio: HTMLAudioElement | null) => {
    audio?.play();
  };

  const handleDeleteItem = (deletedAudioId: number) => {
    setOptions((prev) => prev.filter((option) => option.audioId !== deletedAudioId));
  };

  return (
    <>
      {options.map((option, indexNumber) => (
        <Main key={option.audioId}>
          <Content>
            <span>{indexNumber + 1}</span>
            <IconButton icon={<VoiceIcon />} onClick={() => handlePlay(option.audio)} />
            <span>{option.title}</span>
          </Content>
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteItem(option.audioId)} />
        </Main>
      ))}
    </>
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
