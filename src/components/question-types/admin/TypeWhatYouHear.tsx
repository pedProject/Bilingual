/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

import { Box, IconButton, styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { PauseIcon, PlayIcon } from "../../../assets";
import { Button } from "../../UI/Button/Button";
import { DropzoneContainer } from "../../UI/dropzone/DropzoneContainer";
import { Input } from "../../UI/input/Input";

enum FIELDS {
  FILE = "file",
  REPLAYS_AMOUNT = "replaysAmount",
  CORRECT_ANSWER = "correctAnswer"
}

const TypeWhatYouHear = (): JSX.Element => {
  const { setValue, register, unregister, watch } = useFormContext();

  const existingFile = watch(FIELDS.FILE) || null;
  const fileName = existingFile ? existingFile.name : "";

  const [isPlaying, setIsPlaying] = useState(false);

  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  const onUploadAudio = useCallback(
    async (acceptedFiles: File[]) => {
      const convertToURL = URL.createObjectURL(acceptedFiles[0]);
      if (audio) {
        setIsPlaying(false);
      }
      setAudio(new Audio(convertToURL));

      return setValue(FIELDS.FILE, acceptedFiles[0], { shouldValidate: true });
    },
    [setValue, audio]
  );

  useEffect(() => {
    if (!audio) return undefined;
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio?.pause();
    };
  }, [audio]);

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    register(FIELDS.FILE);
    return () => {
      unregister(FIELDS.FILE);
      setAudio(null);
      setIsPlaying(false);
    };
  }, []);

  const togglePlayerHandler = () => setIsPlaying((prevPlaying) => !prevPlaying);

  return (
    <Container>
      <ReplaysBlock>
        <ReplaysAmountInput
          classes={{ root: "field" }}
          InputProps={{ classes: { input: "input" } }}
          label={"Number of \n Replays"}
          fullWidth={false}
          {...register(FIELDS.REPLAYS_AMOUNT)}
        />

        <FileContainer>
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

          {fileName && (
            <span className="file_name">
              <abbr title={fileName}>{fileName}</abbr>
            </span>
          )}
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
  columnGap: "1rem",
  "& .file_name": {
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "300px",
    fontFamily: "DINNextRoundedLTW01-Regular",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#4C4859",
    marginLeft: "2px",
    "& > abbr": {
      textDecoration: "none"
    }
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

export default TypeWhatYouHear;
