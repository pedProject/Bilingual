/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { InputLabel, styled } from "@mui/material";
import Highlightable from "highlightable";
import { useFormContext } from "react-hook-form";

import { Input } from "../../UI/input/Input";
import { Textarea } from "../../UI/textarea/Textarea";

import type { Range } from "highlightable";

enum FIELDS {
  QUESTION = "questionToPassage",
  PASSAGE = "passage",
  OPTIONS = "options",
  ANSWER = "answer"
}

const HIGHLIGHTED_TEXT_STYLES = {
  color: "#3A10E5",
  textDecoration: "underline"
};

const checkIsNullChar = (text: string, start: number, end: number): boolean => {
  return text.charAt(start).trim() === "" && start === end;
};

export const HighlightAnswer = () => {
  const { register, watch, setValue, unregister } = useFormContext();

  const [selectedRange, setSelectedRange] = useState<Range>();

  const enteredPassage = watch(FIELDS.PASSAGE) || "";

  const ranges = selectedRange ? [selectedRange] : [];

  const highlightTextHandler = (range: Range) => {
    const { start, end, text } = range;
    if (checkIsNullChar(text, start, end)) return undefined;

    const highlightedChars = text.substring(start, end).trim();
    setValue(FIELDS.ANSWER, highlightedChars);

    return setSelectedRange(range);
  };

  useEffect(() => {
    register(FIELDS.ANSWER);
    return () => {
      unregister(FIELDS.ANSWER);
    };
  }, []);

  return (
    <Container>
      <Input
        label="Questions to the Passage"
        {...register(FIELDS.QUESTION, { shouldUnregister: true })}
      />
      <FieldWrapper>
        <Label htmlFor="passage">Passage</Label>
        <StyledTextArea
          id="passage"
          {...register(FIELDS.PASSAGE, { shouldUnregister: true })}
          minRows={3}
        />
      </FieldWrapper>
      {enteredPassage && (
        <FieldWrapper>
          <Label>Highlight correct answer:</Label>
          <PassageText>
            <Highlightable
              ranges={ranges}
              onMouseOverHighlightedWord={() => ({})}
              text={enteredPassage}
              id="uniqueId"
              enabled
              style={{}}
              onTextHighlighted={highlightTextHandler}
              highlightStyle={HIGHLIGHTED_TEXT_STYLES}
            />
          </PassageText>
        </FieldWrapper>
      )}
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1.5rem"
}));

const FieldWrapper = styled("div")(() => ({
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

const PassageText = styled("div")(() => ({
  wordBreak: "break-word",
  color: "#4C4859",
  fontFamily: "DINNextRoundedLTW01-Regular"
}));
