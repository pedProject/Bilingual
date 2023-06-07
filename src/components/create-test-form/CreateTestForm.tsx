import React, { useState } from "react";

import { styled } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import { QUESTION_TYPES } from "../../utils/constants/general";
import { Button } from "../UI/Button/Button";
import { Wrapper } from "../UI/Wrapper";
import { AutoComplete } from "../UI/dropdown/AutoComplete";
import { Input } from "../UI/input/Input";
import { InputNumber } from "../UI/input/InputNumber";
import { ListenAndSelectEnglishWords } from "../question-types/admin/ListenAndSelectEnglishWords";
import { RecordSayingStatement } from "../question-types/admin/RecordSayingStatement";
import { RespondNWords } from "../question-types/admin/RespondNWords";
import TypeWhatYouHear from "../question-types/admin/TypeWhatYouHear";

import type { OptionData } from "../../types/testVerification";

const RENDERED_COMPONENTS_BY_QUESTION_TYPE: { [key: string]: React.ComponentType } = {
  [QUESTION_TYPES.SELECT_ENGLISH_WORDS]: () => <div>Select_English_Words</div>,
  [QUESTION_TYPES.LISTEN_AND_SELECT_WORD]: ListenAndSelectEnglishWords,
  [QUESTION_TYPES.DESCRIBE_THE_IMAGE]: () => <div>DESCRIBE_THE_IMAGE</div>,
  [QUESTION_TYPES.TYPE_WHAT_YOU_HEAR]: TypeWhatYouHear,
  [QUESTION_TYPES.RECORD_SAYING_STATEMENT]: RecordSayingStatement,
  [QUESTION_TYPES.RESPOND_N_WORDS]: RespondNWords
};

const data = [
  { value: QUESTION_TYPES.SELECT_ENGLISH_WORDS, id: "e1", label: "Select real English words" },
  { value: QUESTION_TYPES.DESCRIBE_THE_IMAGE, id: "e2", label: "Describe image" },
  { value: QUESTION_TYPES.LISTEN_AND_SELECT_WORD, id: "e3", label: "Listen and select word" },
  { value: QUESTION_TYPES.TYPE_WHAT_YOU_HEAR, id: "e4", label: "Type what you hear" },
  { value: QUESTION_TYPES.RECORD_SAYING_STATEMENT, id: "4", label: "Record saying statement" },
  { value: QUESTION_TYPES.RESPOND_N_WORDS, id: "5", label: "Respond in at least N words" }
];

export const CreateTestForm = () => {
  const [selectedType, setSelectedType] = useState<string>(QUESTION_TYPES.TYPE_WHAT_YOU_HEAR);

  const CurrentQuestionType = RENDERED_COMPONENTS_BY_QUESTION_TYPE[selectedType];

  const methods = useForm();

  const { handleSubmit, register } = methods;

  const questionTypeChangeHandler = (option: OptionData) => {
    setSelectedType(option.value);
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
          <AutoComplete onChange={questionTypeChangeHandler} optionList={data} label="Type" />
          <CurrentQuestionType key={selectedType} />
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
