import styled from "@mui/material/styles/styled";

import { AddIcon } from "../../assets";
import { Button } from "../../components/UI/Button/Button";
import { Dropdown } from "../../components/UI/Dropdown/Dropdown";
import SelectWordItem from "../../components/UI/Dropdown/SelectWordItem";
import { Wrapper } from "../../components/UI/Wrapper";
import { Input } from "../../components/UI/input/Input";
import { InputNumber } from "../../components/UI/input/InputNumber";

import type { User } from "../../components/UI/Dropdown/Dropdown";

export const InnerTestPage = () => {
  const handleStateChange = (selectedUser: User | null) => {
    console.log(selectedUser, "hello");
  };
  /// воот так будете получать  данные от select
  const userList = [
    { value: "goo", id: "2" },
    { value: "string", id: "4" }
  ];

  return (
    <Wrapper width="60%">
      <InnerContainer>
        <InputWrapper>
          <InputWrapperContainer>
            <Input label="title" />
            <InputNumber format="##:##" label="hello" />
          </InputWrapperContainer>

          <Dropdown
            onSelectUser={handleStateChange}
            containerClassName="grid_item_input"
            userList={userList}
          />
          <StyledButton startIcon={<AddIcon />}>Add Options</StyledButton>
        </InputWrapper>
        <BottomPart>
          <SelectWrapper>
            <SelectWordItem />
            <SelectWordItem />
            <SelectWordItem />
            <SelectWordItem />
            <SelectWordItem />
            <SelectWordItem />
          </SelectWrapper>
          <ButtonWrapper>
            <Button>GO BACK</Button>
            <Button>SAVE</Button>
          </ButtonWrapper>
        </BottomPart>
      </InnerContainer>
    </Wrapper>
  );
};

const InputWrapperContainer = styled("div")`
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

const BottomPart = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  text-align: end;
`;

const SelectWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 34%);
  row-gap: 18px;
`;

const ButtonWrapper = styled("div")`
  button {
    margin-left: 16px;
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
