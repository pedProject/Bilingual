import { useState } from "react";

import { styled } from "@mui/material";

import { AddIcon } from "../../../assets";
import { Button } from "../../UI/Button/Button";
import { CreateOptionModal } from "../../create-option-modal/CreateOptionModal";
import SelectWordItem from "../../select-word-item/SelectWordItem";

import type { modalData } from "../../create-option-modal/CreateOptionModal";

// @TODO: create a modal logic using searchParams
export const ListenAndSelectEnglishWords = () => {
  const [open, setOpen] = useState(false);

  const [options, setOptions] = useState<modalData[]>([]);

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleSave = (data: modalData) => setOptions((prev) => [...prev, data]);

  return (
    <>
      <ButtonBlock>
        <AddOptionButton onClick={handleToggleModal}>
          <AddIcon />
          Add option
        </AddOptionButton>
      </ButtonBlock>

      <StyledSelectWordsBlock>
        <SelectWordItem options={options} setOptions={setOptions} />
      </StyledSelectWordsBlock>

      <CreateOptionModal open={open} handleClose={handleToggleModal} handleSave={handleSave} />
    </>
  );
};

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
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr));",
  justifyItems: "center",
  gap: "1rem"
}));
