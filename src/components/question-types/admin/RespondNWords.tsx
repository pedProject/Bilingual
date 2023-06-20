import { useFormContext } from "react-hook-form";

import { FlexBoxContainer } from "../../../layout/FlexBoxContainer";
import { Input } from "../../UI/input/Input";

export const RespondNWords = () => {
  const { getValues, register } = useFormContext();
  const { question, numberOffWords } = getValues();

  console.log(question, numberOffWords);

  return (
    <FlexBoxContainer FD="column">
      <Input {...register("question")} name="question" label="Question statement" />

      <FlexBoxContainer padding="17px 0 0 0" width="6vw">
        <Input
          {...register("numberOffWords")}
          label="Number off words"
          type="number"
          inputProps={{ min: 0, max: 100 }}
        />
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
