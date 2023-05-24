import styled from "@mui/material/styles/styled";

import { AddIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import { Checkbox } from "../../../components/UI/checkbox/Checkbox";
import { AutoComplete } from "../../../components/UI/Dropdown/AutoComplete";
import SelectWordItem from "../../../components/UI/Dropdown/SelectWordItem";
import { Input } from "../../../components/UI/Input/Input";
import { InputNumber } from "../../../components/UI/Input/InputNumber";
import { Modal } from "../../../components/UI/Modal/Modal";
import { Wrapper } from "../../../components/UI/Wrapper";

import type { IData } from "../../../types/testVerification";

export const InnerTestPage = () => {
  const handleStateChange = (data: IData | null) => {
    console.log(data);
  };

  const userList = [
    { value: "goo", id: "2" },
    { value: "string", id: "4" }
  ];

  const trues = false;
  return (
    <Wrapper width="60%">
      <InnerContainer>
        <InputWrapper>
          <InputWrapperContainer>
            <Input label={"\ntitle"} />

            <InputNumber format="##:##" label={"Duration\n(in minutes)"} />
          </InputWrapperContainer>

          <AutoComplete onSelectUser={handleStateChange} userList={userList} label="Type" />
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
      <Modal
        open={trues}
        onClose={() => false}
        closeIcon={true}
        actions={
          <ButtonContainer>
            <ButtonBack color="info">GO BACK</ButtonBack>
            <ButtonSave>SAVE</ButtonSave>
          </ButtonContainer>
        }
      >
        <Container>
          <Input label="title" />
          is true option? <Checkbox value={false} />
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
  display: flex;
  justify-content: end;
  padding: 16px 24px;
  gap: 16px;
`;
