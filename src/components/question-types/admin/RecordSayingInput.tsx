import { useFormContext } from "react-hook-form";

import { FlexBoxContainer } from "../../layout/FlexBoxContainer";
import { Input } from "../UI/input/Input";

export const RecordSayingStatement = () => {
  const { getValues, register } = useFormContext();
  const { statement } = getValues();

  console.log(statement, "statement");

  return (
    <FlexBoxContainer FD="column">
      <Input {...register("statement")} label="Statement" />
    </FlexBoxContainer>
  );
};
