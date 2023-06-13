import { useState } from "react";

import { styled } from "@mui/material";

import { Button } from "../UI/Button/Button";
import { DropzoneContainer } from "../UI/dropzone/DropzoneContainer";
import { Input } from "../UI/input/Input";
import { Modal } from "../UI/modal/Modal";

export interface modalData {
  title: string;
}

interface CreateOptionModalProps {
  handleClose: () => void;
  open: boolean;
  handleSave: (data: modalData) => void;
}

export const CreateOptionModal = ({ handleClose, open, handleSave }: CreateOptionModalProps) => {
  const [title, setTitle] = useState("");
  // const [audio, setAudio] = useState<File | null>(null);

  const handleSaveNewOption = () => {
    handleSave({ title });
    setTitle("");
    handleClose();
  };

  const handleUploadAudio = () => {
    console.log("upload audio");
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
          value="Listen and select English word"
          label="Title"
          type="readonly"
          placeholder="enter the option"
        />
        <section>
          <DropzoneContainer>
            <UploadAudioButton onDrop={handleUploadAudio}>Upload audio</UploadAudioButton>
          </DropzoneContainer>
        </section>
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
