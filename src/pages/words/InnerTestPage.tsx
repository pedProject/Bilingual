import styled from "@mui/material/styles/styled";

import { AddIcon } from "../../assets";
import { Button } from "../../components/UI/Button/Button";
import { Checkbox } from "../../components/UI/Checkbox";
import { Dropdown } from "../../components/UI/Dropdown/Dropdown";
import SelectWordItem from "../../components/UI/Dropdown/SelectWordItem";
import { Modal } from "../../components/UI/Modal";
import { Wrapper } from "../../components/UI/Wrapper";
import { Input } from "../../components/UI/input/Input";
import { InputNumber } from "../../components/UI/input/InputNumber";

import type { IData } from "../../types/testVerification";

export const InnerTestPage = () => {
  const handleStateChange = (data: IData | null) => {
    console.log(data);
  };

  const userList = [
    { value: "goo", id: "2" },
    { value: "string", id: "4" }
  ];

  const trues = true;
  return (
    <Wrapper width="60%">
      <InnerContainer>
        <InputWrapper>
          <InputWrapperContainer>
            <Input label="title" />
            <InputNumber format="##:##" label="hello" />
          </InputWrapperContainer>

          <Dropdown onSelectUser={handleStateChange} userList={userList} />
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
            <ButtonBack className="button_back" color="secondary">
              GO BACK
            </ButtonBack>
            <ButtonSave className="button_save">SAVE</ButtonSave>
          </ButtonWrapper>
        </BottomPart>
      </InnerContainer>
      <Modal open={trues} onClose={() => false} closeIcon={true}>
        <Container>
          <Input label="title" />
          is true option? <Checkbox value={false} />
          <ButtonContainer>
            <ButtonBack color="info">GO BACK</ButtonBack>
            <ButtonSave>SAVE</ButtonSave>
          </ButtonContainer>
        </Container>
      </Modal>
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

const ButtonBack = styled(Button)`
  background: #ffffff !important;
  border: 2px solid #3a10e5;
  color: #3a10e5;
`;
const ButtonSave = styled(Button)`
  background: #2ab930 !important;
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

const Container = styled("div")``;

const ButtonContainer = styled("div")`
  background: #f0f1f1;
`;
