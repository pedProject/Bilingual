import { useState } from "react";

import styled from "@emotion/styled";

import { Button } from "../../../../components/UI/Button/Button";
import { Modal } from "../../../../components/UI/modal/Modal";

export const QuitModal = () => {
  const [openModal, setOpenModal] = useState(true);

  function openAndCloseModal() {
    setOpenModal((prev) => !prev);
  }
  return (
    <Modal onClose={openAndCloseModal} open={openModal}>
      <Container>
        <Title>Are you sure you want to leave your practice test?</Title>
        <ButtonContainer>
          <Button variant="outlined">QUIT TEST</Button>
          <Button>CONTINUE TEST</Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};
const Container = styled("div")`
  /* width: 500px; */
  height: 158px;
`;

const Title = styled("p")`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 124%;
  color: #4c4859;
  margin: 36px 32px 32px 32px;
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 18.7rem;
  margin: 0 auto;
`;
