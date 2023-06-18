import { Box, InputLabel, styled } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

import { AddIcon } from "../../../assets";
import { useToggleModal } from "../../../hooks/useToggleModal";
import { Button } from "../../UI/Button/Button";
import { Textarea } from "../../UI/textarea/Textarea";
import { ConceptOptionItem } from "../../select-concept/ConceptOptionItem";
import { ConceptOptionModal } from "../../select-concept/ConceptOptionModal";

import type { OptionItem } from "../../../types/testVerification";

enum FIELDS {
  PASSAGE = "passage",
  OPTIONS = "options"
}

const SelectConcept = () => {
  const { register, control, watch } = useFormContext();
  const { isOpen, onOpenModal, onCloseModal } = useToggleModal("modal");

  const options: OptionItem[] = watch(FIELDS.OPTIONS) || [];

  const { append } = useFieldArray({
    control,
    name: FIELDS.OPTIONS,
    shouldUnregister: true,
    rules: { minLength: 4 }
  });

  const addOptionHandler = (option: OptionItem) => {
    append(option);
    onCloseModal();
  };

  return (
    <Container>
      <PassageFieldWrapper>
        <Label htmlFor="passage">Passage</Label>
        <StyledTextArea id="passage" {...register(FIELDS.PASSAGE)} minRows={3} />
      </PassageFieldWrapper>
      <StyledButton
        startIcon={<AddIcon />}
        classes={{ startIcon: "adornment" }}
        onClick={onOpenModal}
      >
        Add option
      </StyledButton>

      <ConceptOptionModal open={isOpen} onClose={onCloseModal} onAddOption={addOptionHandler} />

      {options.map((option, index) => (
        <ConceptOptionItem key={index} index={index + 1} {...option} />
      ))}
    </Container>
  );
};

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "22px",
  alignItems: "flex-start"
}));

const PassageFieldWrapper = styled("div")(() => ({
  width: "100%"
}));
const StyledTextArea = styled(Textarea)(() => ({
  maxHeight: "250px"
}));

const Label = styled(InputLabel)(() => ({
  color: "#4B4759",
  fontFamily: "DIN Next",
  marginBottom: "0.75rem",
  display: "inline-block"
}));

const StyledButton = styled(Button)(() => ({
  alignSelf: "flex-end",
  padding: "0.75rem 1rem",
  height: "42px",
  letterSpacing: "0.5px",
  "&:hover": {
    background: "#3A10E5E5"
  },
  "&:active": {
    background: "#3007DA"
  },
  "& .adornment > svg": {
    width: "10.5px",
    height: "10.5px"
  },
  "& .adornment": {
    position: "relative",
    top: "-1px",
    marginRight: "13.5px"
  }
}));

const SelectBestTitle = () => <SelectConcept />;
const SelectTheMainIdea = () => <SelectConcept />;

export { SelectTheMainIdea, SelectBestTitle };
