/* eslint-disable react-hooks/exhaustive-deps */
import type { ComponentType } from "react";
import { useCallback, useEffect } from "react";

import { Box, IconButton, styled } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import { PauseIcon, PlayIcon } from "../../../assets";
import { useSound } from "../../../hooks/useSound";
import { Button } from "../../UI/Button/Button";
import { DropzoneContainer } from "../../UI/dropzone/DropzoneContainer";
import { FileName } from "../../UI/dropzone/FileName";
import { Input } from "../../UI/input/Input";

import type { TextFieldProps } from "@mui/material";

enum FIELDS {
  FILE = "audio",
  REPLAYS_AMOUNT = "replaysAmount",
  CORRECT_ANSWER = "correctAnswer"
}

export const TypeWhatYouHear = (): JSX.Element => {
  const { setValue, register, unregister, watch, control } = useFormContext();
  const { audio, isPlaying, togglePlayerHandler, setAudio, stopAudio } = useSound();

  const existingFile = watch(FIELDS.FILE) || null;

  const onUploadAudio = useCallback(
    (acceptedFiles: File[]) => {
      const convertToURL = URL.createObjectURL(acceptedFiles[0]);
      if (audio) {
        stopAudio();
      }
      setAudio(new Audio(convertToURL));
      return setValue(FIELDS.FILE, acceptedFiles[0], { shouldValidate: true });
    },
    [setValue, audio]
  );

  useEffect(() => {
    register(FIELDS.FILE);
    return () => {
      unregister(FIELDS.FILE);
      setAudio(null);
      stopAudio();
    };
  }, []);

  return (
    <Container>
      <ReplaysBlock>
        <Controller
          control={control}
          name={FIELDS.REPLAYS_AMOUNT}
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              format="##"
              name={name}
              value={value}
              onChange={onChange}
              customInput={ReplaysAmountInput as ComponentType<TextFieldProps>}
              classes={{ root: "field" }}
              InputProps={{ classes: { input: "input" } }}
              label={"Number of \n Replays"}
              fullWidth={false}
            />
          )}
        />
        <FileContainer>
          <Box className="file_actions">
            <DropzoneContainer onDrop={onUploadAudio}>
              <StyledButton type="button" className="button">
                {!audio ? "Upload" : "Replace"}
              </StyledButton>
            </DropzoneContainer>

            {audio && (
              <StyledIconButton onClick={togglePlayerHandler} className="button">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </StyledIconButton>
            )}
          </Box>
          {existingFile && <FileName file={existingFile} />}
        </FileContainer>
      </ReplaysBlock>
      <Input label={"Correct answer"} {...register(FIELDS.CORRECT_ANSWER)} />
    </Container>
  );
};

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "28px"
}));

const ReplaysAmountInput = styled(Input)(() => ({
  width: "49px",
  "&.field .input": {
    height: "42px",
    padding: "0 1rem"
  }
}));

const ReplaysBlock = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  gap: "0.75rem",
  "& .button": {
    height: "42px",
    background: "#3A10E5",
    "&:hover": {
      background: "rgba(58, 16, 229, 0.9)"
    },
    "&:active": {
      background: "#3007DA"
    }
  }
}));

const FileContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  "& > .file_actions": {
    display: "flex",
    alignItems: "center",
    columnGap: "1rem"
  }
}));

const StyledButton = styled(Button)(() => ({
  padding: "0 1.5rem",
  fontFamily: "DINNextRoundedLTPro-Bold"
}));

const StyledIconButton = styled(IconButton)(() => ({
  borderRadius: "8px",
  width: "46px"
}));
