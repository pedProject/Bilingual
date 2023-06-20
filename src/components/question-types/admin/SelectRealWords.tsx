import { useEffect, useState } from "react";
import { type ChangeEvent } from "react";

import { Box, styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { DeleteIcon, PlusIcon } from "../../../assets";
import { Button } from "../../UI/Button/Button";
import { Checkbox } from "../../UI/checkbox/Checkbox";
import { Input } from "../../UI/input/Input";
import { Modal } from "../../UI/modal/Modal";

interface Option {
  id: number;
  value: string;
  isOption: boolean;
}

export const SelectRealWords = () => {
  const [showModal, setShowModal] = useState(false);
  const [valueOption, setValueOption] = useState("");
  const [valueOptionError, setValueOptionError] = useState({
    text: "",
    error: false
  });
  const [options, setOptions] = useState<Option[]>([]);
  const [isOption, setIsOption] = useState(false);
  const isDisabled = Boolean(valueOption.trim());

  const { setValue } = useFormContext();

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const changeOptionValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueOption(e.target.value);
  };

  const changeOptionCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOption(e.target.checked);
  };

  const addOptionHandler = () => {
    if (valueOption.trim()) {
      const option = {
        id: Date.now(),
        value: valueOption,
        isOption: isOption
      };

      setOptions([...options, option]);

      setValueOption("");
      setValueOptionError({
        text: "",
        error: false
      });
      closeModalHandler();
    } else {
      setValueOptionError({ text: "Заполните поле!", error: true });
    }
  };

  const deleteOption = (id: number) => {
    const filteredOptions = options.filter((option) => option.id !== id);
    setOptions(filteredOptions);
  };

  useEffect(() => {
    setValue("options", JSON.stringify(options));
  }, [options, setValue]);

  return (
    <>
      <Modal
        closeIcon={true}
        open={showModal}
        onClose={closeModalHandler}
        actionsElement={
          <StyledButtons>
            <StyledBackBtn onClick={closeModalHandler}>GO BACK</StyledBackBtn>

            <StyledSaveBtn disabled={!isDisabled} onClick={addOptionHandler}>
              SAVE
            </StyledSaveBtn>
          </StyledButtons>
        }
      >
        <StyledModal>
          <Input
            label="Title"
            value={valueOption}
            error={valueOptionError.error}
            helperText={valueOptionError.text}
            onChange={changeOptionValueHandler}
          />

          <Box className="variant">
            Is true option?
            <Checkbox value={isOption} onChange={changeOptionCheckedHandler} />
          </Box>
        </StyledModal>
      </Modal>

      <StyledBox>
        <StyledButton onClick={openModalHandler}>
          <PlusIcon /> <p>ADD OPTIONS</p>
        </StyledButton>

        <Box className="words">
          {options.map((option, i) => (
            <Box key={option.id} className="word">
              <Box>
                <p>{i + 1}</p> <p>{option.value}</p>
              </Box>

              <Box className="actions">
                <Checkbox checked={option.isOption} readOnly />
                <DeleteIcon className="dlt" onClick={() => deleteOption(option.id)} />
              </Box>
            </Box>
          ))}
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
      height: "fit-content",
      flexWrap: "wrap",

      "& > div": {
        display: "flex",
        gap: "10px",
        alignItems: "center"
      },

      "& > .actions": {
        paddingLeft: "10px"
      },

      "& > .actions > .dlt ": {
        cursor: "pointer"
      },

      "& > div > p": {
        wordBreak: "break-all"
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
