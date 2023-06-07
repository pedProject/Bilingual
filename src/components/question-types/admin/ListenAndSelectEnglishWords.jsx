import React from "react";

import { styled } from "@mui/material";

import { AddIcon } from "../../../assets";
import { Button } from "../../UI/Button/Button";
import { Checkbox } from "../../UI/checkbox/Checkbox";
import SelectWordItem from "../../UI/dropdown/SelectWordItem";
import { Input } from "../../UI/input/Input";
import { Modal } from "../../UI/modal/Modal";

export const ListenAndSelectEnglishWords = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <ButtonBlock>
        <AddOptionButton onClick={handleOpen}>
          <AddIcon />
          Add option
        </AddOptionButton>
      </ButtonBlock>
      <StyledSelectWordsBlock>
        <SelectWordItem title="jhsflaksjhdflkajh" />
        <SelectWordItem title="jasldkfjhaafjkl" />
        <SelectWordItem title="elizar" />
      </StyledSelectWordsBlock>
      {open && (
        <Modal
          closeIcon
          onClose={handleOpen}
          open={open}
          actionsElement={
            <ActionsButtonStyles>
              <BackButton onClick={handleOpen}>Go back</BackButton>
              <SaveButton>Save</SaveButton>
            </ActionsButtonStyles>
          }
          mainContent={
            <form>
              <ModalInput label="Title" placeholder="enter the english word..." />
              Is true option?
              <Checkbox />
            </form>
          }
        />
      )}
    </>
  );
};

const ModalInput = styled(Input)(() => ({
  width: "95%",
  margin: "0 auto",
  marginBottom: "1.25rem"
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

const AddOptionButton = styled(Button)(({ theme }) => ({
  width: "9.375rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark
  },
  "& svg": {
    marginRight: "0.5rem"
  }
}));

const ButtonBlock = styled("section")(() => ({
  display: "flex",
  justifyContent: "flex-end"
}));

const StyledSelectWordsBlock = styled("section")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr));",
  justifyItems: "center",
  gap: "1rem"
}));
