import { useState } from "react";

import { styled } from "@mui/material";

import { MAX_AUDIO_SIZE_IN_BYTES } from "../../utils/constants/general";
import { Button } from "../UI/Button/Button";
import { DropzoneContainer } from "../UI/dropzone/DropzoneContainer";
import { FileName } from "../UI/dropzone/FileName";
import { Input } from "../UI/input/Input";
import { Modal } from "../UI/modal/Modal";

export interface modalData {
  title: string;
  audio: HTMLAudioElement | null;
  audioId: number;
}

interface CreateOptionModalProps {
  handleClose: () => void;
  open: boolean;
  handleSave: (data: modalData) => void;
}

export const CreateOptionModal = ({ handleClose, open, handleSave }: CreateOptionModalProps) => {
  const [title, setTitle] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [inputError, setInputError] = useState("");

  const handleSaveNewOption = () => {
    if (!title.trim() || !audioFile) {
      setInputError("Please enter a valid option and upload an audio file.");
      return;
    }

    if (audioFile.size > MAX_AUDIO_SIZE_IN_BYTES) return;

    handleSave({ title, audio: new Audio(URL.createObjectURL(audioFile)), audioId: Date.now() });
    setTitle("");
    setAudioFile(null);
    setInputError("");
    handleClose();
  };

  const handleUploadAudio = (file: File[]) => {
    setAudioFile(file[0]);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setInputError("");
  };

  return (
    <Modal
      closeIcon
      onClose={handleClose}
      open={open}
      actionsElement={
        <ActionsButtonStyles>
          <BackButton onClick={handleClose}>Go back</BackButton>
          <SaveButton onClick={handleSaveNewOption}>Save</SaveButton>
        </ActionsButtonStyles>
      }
    >
      <>
        <ModalInput
          value={title}
          label="Title"
          placeholder="Enter the option"
          onChange={handleTitleChange}
        />

        <SelectedAudioSection>
          <DropzoneContainer onDrop={handleUploadAudio}>
            <UploadAudioButton>{audioFile ? "Change file" : "Upload file"}</UploadAudioButton>
          </DropzoneContainer>
          {audioFile && <FileName file={audioFile} />}
          {audioFile && audioFile.size > MAX_AUDIO_SIZE_IN_BYTES && (
            <ErrorMessageTag>file is too big</ErrorMessageTag>
          )}
          {inputError && <ErrorMessageTag>{inputError}</ErrorMessageTag>}
        </SelectedAudioSection>
      </>
    </Modal>
  );
};

const ModalInput = styled(Input)(() => ({
  width: "95%",
  margin: "0 auto",
  marginBottom: "1.25rem"
}));

const UploadAudioButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  width: "9.375rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  }
}));

const ActionsButtonStyles = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  background: "#F0F1F1",
  padding: "1.6rem 3.75rem 1.6rem 0"
}));

const BackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.main}`,
  padding: "0.5rem 1.5rem",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  }
}));

const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  "&:hover": {
    backgroundColor: theme.palette.success.light,
    color: "#fff"
  }
}));

const SelectedAudioSection = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center"
}));

const ErrorMessageTag = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  padding: "0.5rem",
  fontSize: "1rem",
  marginLeft: "1rem"
}));
