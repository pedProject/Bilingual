import styled from "@emotion/styled";

import { Button } from "../../../../components/UI/Button/Button";
import { Modal } from "../../../../components/UI/modal/Modal";

type Props = {
  openModal: boolean;
  onClose: () => void;
  onQuitTest: () => void;
  onContinueTest: () => void;
};

export const QuitModal = ({ openModal, onClose, onQuitTest, onContinueTest }: Props) => {
  return (
    <Modal onClose={onClose} open={openModal}>
      <Container>
        <Title>Are you sure you want to leave your practice test?</Title>
        <ButtonContainer>
          <Button variant="outlined" onClick={onQuitTest}>
            QUIT TEST
          </Button>
          <Button onClick={onContinueTest}>CONTINUE TEST</Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};
const Container = styled("div")`
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
