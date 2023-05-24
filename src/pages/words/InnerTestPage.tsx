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
  const handleStateChange = (e: User | null) => {
    console.log(e, "helllo");
  };

  const UserList = [
    {
      value: "goo",
      id: "2"
    },
    {
      value: "string",
      id: "4"
    }
  ];
  return (
    <Wrapper width="70%">
      <InnerContainer>
        <InputWrapper>
          <InputWrapperContainer>
            <StyledInput label="title" fullWidth />
            <InputNumber format="##:##" style={{ width: "100px" }} label="fdsafdas" />
          </InputWrapperContainer>

          <Dropdown
            onSelectUser={handleStateChange}
            containerClassName="grid_item_input"
            userList={UserList}
          />
          <Button startIcon={<AddIcon />}>Add Options</Button>
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

const StyledInput = styled(Input)``;

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
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  button {
    align-self: end;
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
