import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormControlLabel, InputLabel, styled } from "@mui/material";
import { useForm } from "react-hook-form";

import { optionValidationSchema, type OptionItem } from "../../types/testVerification";
import { Button } from "../UI/Button/Button";
import { Checkbox } from "../UI/checkbox/Checkbox";
import { Modal } from "../UI/modal/Modal";
import { Textarea } from "../UI/textarea/Textarea";

import type { SubmitHandler } from "react-hook-form";

type ConceptOptionModalProps = {
  open: boolean;
  onClose: () => void;
  onAddOption: (option: OptionItem) => void;
};

const ModalActions = ({
  onGoBack,
  onSave,
  disabled
}: {
  onGoBack: () => void;
  onSave: () => void;
  disabled: boolean;
}) => {
  return (
    <ActionsContainer>
      <ButtonBack onClick={onGoBack}>Go Back</ButtonBack>
      <ButtonSave onClick={onSave} classes={{ disabled: "custom_disabled" }} disabled={disabled}>
        Save
      </ButtonSave>
    </ActionsContainer>
  );
};

export const ConceptOptionModal = ({ open, onClose, onAddOption }: ConceptOptionModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm<OptionItem>({
    defaultValues: {
      title: "",
      isTrue: false
    },
    resolver: zodResolver(optionValidationSchema)
  });

  const submitHandler: SubmitHandler<OptionItem> = (data) => {
    onAddOption(data);
    reset();
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeIcon
      closeAfterTransition
      actionsElement={
        <ModalActions onGoBack={onClose} disabled={!isValid} onSave={handleSubmit(submitHandler)} />
      }
    >
      <Container>
        <TitleFieldWrapper>
          <Label htmlFor="title">Title</Label>
          <StyledTextArea id="title" {...register("title")} />
        </TitleFieldWrapper>
        <FormControl>
          <StyledControlLabel
            labelPlacement="start"
            control={<Checkbox />}
            label="Is true option?"
            {...register("isTrue")}
          />
        </FormControl>
      </Container>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)(() => ({
  "& .MuiDialogTitle-root": {
    padding: "1.25rm 2rem 2rem"
  },
  "& .MuiDialogContent-root": {
    padding: "0 3.75rem 5rem"
  }
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  rowGap: "1.125rem"
}));

const TitleFieldWrapper = styled("div")(() => ({
  width: "100%"
}));

const StyledTextArea = styled(Textarea)(() => ({
  maxHeight: "150px"
}));
const Label = styled(InputLabel)(() => ({
  color: "#4B4759",
  fontFamily: "DIN Next",
  marginBottom: "0.75rem",
  display: "inline-block"
}));

const StyledControlLabel = styled(FormControlLabel)(() => ({
  marginLeft: "0",
  display: "flex",
  alignItems: "center",
  gap: "5px"
}));

const ActionsContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "1.625rem 3.75rem",
  background: "#F0F1F1",
  gap: "1rem"
}));

const ButtonBack = styled(Button)(() => ({
  background: "#ffffff",
  border: "2px solid #3A10E5",
  color: "#3a10e5",
  height: "42px",
  padding: "0 1.5rem",
  "&:hover": {
    background: "#3A10E5",
    color: "#fff"
  },
  "&:active": {
    background: "#3007DA"
  }
}));

const ButtonSave = styled(Button)(() => ({
  height: "42px",
  padding: "0 1.5rem",
  background: "#2ab930",
  border: "2px solid #2ab930",
  boxShadow: "none",
  "&:hover": {
    background: "#31CF38",
    border: "2px solid #31CF38"
  },
  "&:active": {
    background: "#08AF10",
    border: "2px solid #08AF10"
  },
  "&.custom_disabled": {
    boxShadow: "0px 1px 2px rgba(196, 196, 196, 0.2), 0px 1px 2px rgba(196, 196, 196, 0.2)"
  }
}));
