import { useState } from "react";

import styled from "@mui/material/styles/styled";

import { AddIcon } from "../../../assets";
import { Button } from "../../../components/UI/Button/Button";
import { Wrapper } from "../../../components/UI/Wrapper";
import { AutoComplete } from "../../../components/UI/dropdown/AutoComplete";
import SelectWordItem from "../../../components/UI/dropdown/SelectWordItem";
import { Input } from "../../../components/UI/input/Input";
import { InputNumber } from "../../../components/UI/input/InputNumber";
import { Modal } from "../../../components/UI/modal/Modal";

import type { OptionData } from "../../../types/testVerification";

export const InnerTestPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);

  const handleStateChange = (data: OptionData | null) => {
    console.log(data);
  };

  const data = [
    { value: "goo", id: "2" },
    { value: "string", id: "4" }
  ];

  return (
    <Wrapper width="60%">
      <InnerContainer>
        <TopPart>
          <InputWrapperContainer>
            <Input label={"\nTitle"} />
            <InputNumber format="##:##" label={"Duration\n(in minutes)"} />
          </InputWrapperContainer>
          <AutoComplete onSelectUser={handleStateChange} userList={data} label="Type" />
          <StyledButton startIcon={<AddIcon />} onClick={handleModalOpen}>
            Add Options
          </StyledButton>
        </TopPart>
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
        open={showModal}
        onClose={() => setShowModal(false)}
        closeIcon={true}
        actionsElement={
          <ButtonContainer>
            <ButtonBack color="info">GO BACK</ButtonBack>
            <ButtonSave>SAVE</ButtonSave>
          </ButtonContainer>
        }
      >
        <Container>
          <Input label="title" />
          <StyleDivUpploadFile>
            <UpploadFile htmlFor="file">Uppload audio file</UpploadFile>
            <UpploadAudioFile id="file" type="file" accept="audio/*" />
            <UpploadFileName>hello</UpploadFileName>
          </StyleDivUpploadFile>
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

const TopPart = styled("div")`
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
const UpploadFile = styled("label")`
  padding: 14px 16px;
  background: #ffffff;
  border: 1.53px solid #3a10e5;
  border-radius: 8px;
  color: #3a10e5;
  font-family: "Gilroy";
  font-family: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
`;

const UpploadFileName = styled("div")`
  width: 233px;
  height: 18px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #4c4859;
`;
const StyleDivUpploadFile = styled("div")`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
`;

const UpploadAudioFile = styled("input")`
  background-color: #ffffff;
  border: 1.53px solid #3a10e5;
  border-radius: 8px;
  font-family: "DINNextRoundedLTW04-Medium";
  font-style: normal;
  font-weight: 500px;
  font-size: 1rem;
  line-height: 18px;
  display: none;
  width: 159px;
  height: 46px;
  text-align: center;
  color: #3a10e5;
  margin-top: 24px;
`;
