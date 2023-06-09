import { useState } from "react";

import { Box, styled } from "@mui/material";

import { DeleteIcon, PlusIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import { Checkbox } from "../../../components/UI/checkbox/Checkbox";
import { Input } from "../../../components/UI/input/Input";
import { Modal } from "../../../components/UI/modal/Modal";

export const SelectWords = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <Modal
        actionsElement={
          <StyledButtons>
            <StyledBackBtn>GO BACK</StyledBackBtn>

            <StyledSaveBtn>SAVE</StyledSaveBtn>
          </StyledButtons>
        }
        closeIcon={true}
        open={showModal}
        onClose={closeModalHandler}
      >
        <StyledModal>
          <Input label="Title" />

          <Box className="variant">
            Is true option? <Checkbox />
          </Box>
        </StyledModal>
      </Modal>

      <StyledBox>
        <StyledButton onClick={openModalHandler}>
          <PlusIcon /> <p>ADD OPTIONS</p>
        </StyledButton>

        <Box className="words">
          {/* Будет так! Пока статично. {data.map((word) => ( */}
          <Box className="word">
            <Box>
              <p>1</p> <p>advantage</p>
            </Box>

            <Box>
              <Checkbox /> <DeleteIcon />
            </Box>
          </Box>
          {/* ))} */}
        </Box>
      </StyledBox>
    </>
  );
};

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "end",

  "& > .words": {
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    flexWrap: "wrap",
    width: "100%",

    "& > .word": {
      background: "#FFFFFF",
      border: " 1.53px solid #D4D0D0",
      borderRadius: "8px",
      padding: "14px",
      display: "flex",
      justifyContent: "space-between",
      width: "32%",
      flexWrap: "wrap",

      "& > div": {
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }
    }
  }
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: "8px",
  height: "42px",
  padding: "12px 24px 12px 16px",
  display: "flex",
  gap: "15.5px",
  margin: "0 0 25px 0"
}));

const StyledModal = styled(Box)(() => ({
  "& .variant": {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }
}));

const StyledBackBtn = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    background: "#fff",
    color: "#3A10E5",
    border: "2px solid #3A10E5"
  }
}));

const StyledSaveBtn = styled(Button)(() => ({
  "&.MuiButtonBase-root": {
    background: "#2AB930",
    color: "#fff"
  }
}));

const StyledButtons = styled(Box)(() => ({
  padding: "26px 60px",
  marginTop: "40px",
  background: "#F0F1F1",
  borderRadius: "0px 0px 20px 20px",
  display: "flex",
  justifyContent: "end",
  gap: "16px"
}));
