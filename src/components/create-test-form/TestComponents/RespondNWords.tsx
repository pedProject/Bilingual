import { useState } from "react";

import { FlexBoxContainer } from "../../../layout/FlexBoxContainer";
import { Input } from "../../UI/input/Input";

type QuestionAndNumber = {
  question: string;
  numberOffWords: number;
};

export const RespondNWords = () => {
  const [questionAndNumber, setQuestionAndNumber] = useState<QuestionAndNumber>({
    question: "",
    numberOffWords: 0
  });

  const getQuestionAndNumberChange = (e: { target: { name: string; value: number | string } }) => {
    setQuestionAndNumber({ ...questionAndNumber, [e.target.name]: e.target.value });
  };

  return (
    <FlexBoxContainer FD="column">
      <Input
        name="question"
        onChange={getQuestionAndNumberChange}
        value={questionAndNumber.question}
        label="Question statement"
      />

      <FlexBoxContainer padding="17px 0 0 0" width="6vw">
        <Input
          name="numberOffWords"
          onChange={getQuestionAndNumberChange}
          value={questionAndNumber.numberOffWords}
          label="Number off words"
          type="number"
          inputProps={{ min: 0, max: 100 }}
        />
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
