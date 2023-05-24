import styled from "@mui/material/styles/styled";

import { AddIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import { Dropdown } from "../../../components/UI/Dropdown/Dropdown";
import { Wrapper } from "../../../components/UI/Wrapper";
import { Input } from "../../../components/UI/input/Input";
import { InputNumber } from "../../../components/UI/input/InputNumber";

import type { IData } from "../../../types/testVerification";

export const TestPage = () => {
  const handleStateChange = (data: IData | null) => {
    console.log(data);
  };

  const userList = [
    { value: "goo", id: "2" },
    { value: "string", id: "4" }
  ];

  return (
    <Wrapper width="60%">
      <InnerContainer>
        <InputWrapper>
          <StyledInputWrapperContainer>
            <Input label="title" />
            <InputNumber format="##:##" label="hello" />
          </StyledInputWrapperContainer>

          <Dropdown onSelectUser={handleStateChange} userList={userList} />
          <StyledButton startIcon={<AddIcon />}>Add Options</StyledButton>
        </InputWrapper>
      </InnerContainer>
    </Wrapper>
  );
};

const StyledInputWrapperContainer = styled("div")`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const InnerContainer = styled("div")`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    background-color: #3a10e5;
    padding: 7px 10px;
    svg {
      width: 10.5px;
      margin-right: 10px;
    }
  }
`;
