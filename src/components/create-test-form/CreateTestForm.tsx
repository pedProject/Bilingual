import React, { useState } from "react";

import { styled } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import { TEST_TYPE } from "../../utils/constants/general";
import { Button } from "../UI/Button/Button";
import { Wrapper } from "../UI/Wrapper";
import { AutoComplete } from "../UI/dropdown/AutoComplete";
import { Input } from "../UI/input/Input";
import { InputNumber } from "../UI/input/InputNumber";

import { RecordSayingStatement } from "./TestComponents/RecordSayingStatement";
import { RespondNWords } from "./TestComponents/RespondNWords";

import type { OptionData } from "../../types/testVerification";

const QUESTION_TYPES: { [key: string]: React.ComponentType } = {
  SELECT_ENGLISH_WORDS: () => <div>SELECT_ENGLISH_WORDS</div>,
  LISTEN_AND_SELECT_WORD: () => <div>LISTEN_AND_SELECT_WORD</div>,
  DESCRIBE_THE_IMAGE: () => <div>DESCRIBE_THE_IMAGE</div>,
  RECORD_SAYING_STATEMENT: () => <RecordSayingStatement />,
  RESPOND_N_WORDS: () => <RespondNWords />
};

const data = [
  { value: TEST_TYPE.SELECT_ENGLISH_WORDS, id: "2", label: "Select real English words" },
  { value: TEST_TYPE.DESCRIBE_THE_IMAGE, id: "4", label: "Describe image" },
  { value: TEST_TYPE.SELECT_ENGLISH_WORDS, id: "1", label: "Listen and select word" },
  { value: TEST_TYPE.RECORD_SAYING_STATEMENT, id: "4", label: "Record saying statement" },
  { value: TEST_TYPE.RESPOND_N_WORDS, id: "5", label: "Respond in at least N words" }
];

export const CreateTestForm = () => {
  const [selectedType, setSelectedType] = useState("SELECT_ENGLISH_WORDS");

  const Component = QUESTION_TYPES[selectedType];

  const methods = useForm();

  const { handleSubmit, register } = methods;

  const questionTypeChangeHandler = (option: OptionData) => {
    setSelectedType(option.value);
  };

  const onSubmit = (data: any) => {
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
          <Component key={selectedType} />
          <ButtonWrapper>
            <ButtonBack color="secondary" type="button">
              GO BACK
            </ButtonBack>
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
`;

const ButtonWrapper = styled("div")`
  text-align: end;
  button {
    margin-left: 16px;
  }
`;

const ButtonBack = styled(Button)`
  background: #ffffff !important;
  border: 2px solid #3a10e5;
  color: #3a10e5;
`;
const ButtonSave = styled(Button)`
  background: #2ab930 !important;
`;
