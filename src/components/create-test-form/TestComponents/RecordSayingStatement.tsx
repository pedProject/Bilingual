import { useState } from "react";

import { FlexBoxContainer } from "../../../layout/FlexBoxContainer";
import { Input } from "../../UI/input/Input";

export const RecordSayingStatement = () => {
  const [statementValue, setStatementValue] = useState<string>("");

  const getStatementValue = (e: { target: { value: string } }) => {
    setStatementValue(e.target.value);
  };

  return (
    <FlexBoxContainer FD="column">
      <Input value={statementValue} onChange={getStatementValue} label="Statement" />
    </FlexBoxContainer>
  );
};
