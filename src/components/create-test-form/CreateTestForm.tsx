import React, { useState } from "react";

import { styled } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "../UI/Button/Button";
import { Wrapper } from "../UI/Wrapper";
import { AutoComplete } from "../UI/dropdown/AutoComplete";
import { Input } from "../UI/input/Input";
import { InputNumber } from "../UI/input/InputNumber";

import type { OptionData } from "../../types/testVerification";

const QUESTION_TYPES: { [key: string]: React.ComponentType } = {
  SELECT_ENGLISH_WORDS: () => <div>SELECT_ENGLISH_WORDS</div>,
  LISTEN_AND_SELECT_WORD: () => <div>LISTEN_AND_SELECT_WORD</div>
};

const data = [
  { value: "SELECT_ENGLISH_WORDS", id: "2", label: "Select real English words" },
  { value: "DESCRIBE_THE_IMAGE", id: "4", label: "Describe image" },
  { value: "LISTEN_AND_SELECT_WORD", id: "2", label: "Listen and select word" }
];

export const CreateTestForm = () => {
  const [selectedType, setSelectedType] = useState<{ key: string }>({ key: "" });

  const Component = QUESTION_TYPES[selectedType.key];

  const methods = useForm();

  const { handleSubmit, register } = methods;

  const handleTypeChange = (data: OptionData | null) => {
    setSelectedType({ key: data?.value || "" });
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
          <AutoComplete onSelectUser={handleTypeChange} userList={data} label="Type" />
          {Component && <Component key={selectedType.key} />}
          <ButtonWrapper>
            <ButtonBack color="secondary">GO BACK</ButtonBack>
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
