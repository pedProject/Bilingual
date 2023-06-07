import React, { useState } from "react";

import { styled } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import { QUESTION_TYPES } from "../../utils/constants/general";
import { Button } from "../UI/Button/Button";
import { Wrapper } from "../UI/Wrapper";
import { AutoComplete } from "../UI/dropdown/AutoComplete";
import { Input } from "../UI/input/Input";
import { InputNumber } from "../UI/input/InputNumber";
import { SelectBestTitle, SelectTheMainIdea } from "../question-types/admin/SelectConcept";
import TypeWhatYouHear from "../question-types/admin/TypeWhatYouHear";

import { RecordSayingStatement } from "./TestComponents/RecordSayingStatement";
import { RespondNWords } from "./TestComponents/RespondNWords";

import type { OptionData } from "../../types/testVerification";

const RENDERED_COMPONENTS_BY_QUESTION_TYPE: { [key: string]: React.ComponentType } = {
  [QUESTION_TYPES.SELECT_ENGLISH_WORDS]: () => <div>SELECT_ENGLISH_WORDS</div>,
  [QUESTION_TYPES.LISTEN_AND_SELECT_WORD]: () => <div>LISTEN_AND_SELECT_WORD</div>,
  [QUESTION_TYPES.TYPE_WHAT_YOU_HEAR]: TypeWhatYouHear,
  [QUESTION_TYPES.DESCRIBE_THE_IMAGE]: () => <div>DESCRIBE_THE_IMAGE</div>,
  [QUESTION_TYPES.RECORD_SAYING_STATEMENT]: RecordSayingStatement,
  [QUESTION_TYPES.RESPOND_N_WORDS]: RespondNWords,
  [QUESTION_TYPES.HIGHLIGHT_THE_ANSWER]: () => <div>HIGHLIGHT_THE_ANSWER</div>,
  [QUESTION_TYPES.SELECT_THE_MAIN_IDEA]: SelectTheMainIdea,
  [QUESTION_TYPES.SELECT_BEST_TITLE]: SelectBestTitle
};

const QUESTION_TYPE_OPTIONS: OptionData[] = [
  { value: QUESTION_TYPES.SELECT_ENGLISH_WORDS, id: "e1", label: "Select real English words" },
  { value: QUESTION_TYPES.DESCRIBE_THE_IMAGE, id: "e2", label: "Describe image" },
  { value: QUESTION_TYPES.LISTEN_AND_SELECT_WORD, id: "e3", label: "Listen and select word" },
  { value: QUESTION_TYPES.TYPE_WHAT_YOU_HEAR, id: "e4", label: "Type what you hear" },
  { value: QUESTION_TYPES.RECORD_SAYING_STATEMENT, id: "e5", label: "Record saying statement" },
  { value: QUESTION_TYPES.RESPOND_N_WORDS, id: "e6", label: "Respond in at least N words" },
  { value: QUESTION_TYPES.HIGHLIGHT_THE_ANSWER, id: "e7", label: "Highlight the answer" },
  { value: QUESTION_TYPES.SELECT_THE_MAIN_IDEA, id: "e8", label: "Select the main idea" },
  { value: QUESTION_TYPES.SELECT_BEST_TITLE, id: "e9", label: "Select best title" }
];

export const CreateTestForm = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;

  const [selectedType, setSelectedType] = useState(QUESTION_TYPE_OPTIONS[6]);
  const CurrentQuestionType = RENDERED_COMPONENTS_BY_QUESTION_TYPE[selectedType.value];

  const questionTypeChangeHandler = (option: OptionData) => {
    setSelectedType(option);
  };

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Wrapper width="66%">
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapperContainer>
            <Input label={"\nTitle"} {...register("title")} />
            <InputNumber
              format="##:##"
              label={"Duration\n(in minutes)"}
              {...register("duration")}
            />
          </InputWrapperContainer>
          <AutoComplete
            onChange={questionTypeChangeHandler}
            value={selectedType}
            options={QUESTION_TYPE_OPTIONS}
            label="Type"
          />
          <CurrentQuestionType />
          <ButtonWrapper>
            <ButtonBack type="button">GO BACK</ButtonBack>
            <ButtonSave type="submit">SAVE</ButtonSave>
          </ButtonWrapper>
        </Form>
      </FormProvider>
    </Wrapper>
  );
};

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const InputWrapperContainer = styled("div")`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: flex-end;
`;

const ButtonWrapper = styled("div")`
  text-align: end;
  margin-top: 8px;
`;

const ButtonBack = styled(Button)(() => ({
  background: "#ffffff",
  border: "2px solid #3a10e5",
  color: "#3a10e5",
  height: "42px",
  padding: "0 1.5rem"
}));

const ButtonSave = styled(Button)(() => ({
  height: "42px",
  padding: "0 1.5rem",
  background: "#2ab930",
  marginLeft: "1rem",
  "&:hover": {
    background: "#2ab930"
  }
}));
