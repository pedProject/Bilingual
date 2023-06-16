import { useState } from "react";

import { Modal } from "./Modal";

export const QuitModal = () => {
  const [openModal, setOpenModal] = useState(false);

  function openAndCloseModal() {
    setOpenModal((prev) => !prev);
  }
  return (
    <Modal onClose={openAndCloseModal} open={openModal}>
      <div>Quit Modal</div>
    </Modal>
  );
};
