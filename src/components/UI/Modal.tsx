import { Dialog } from "@mui/material";

import type { ModalProps } from "@mui/material";

type Props = ModalProps;

export const Modal = ({ open, onClose, children }: Props): JSX.Element => {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};
