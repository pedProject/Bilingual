import type { ReactNode } from "react";

import Dialog from "@mui/material/Dialog";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
}

export const Modal = ({ open, handleClose, children }: ModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {children}
    </Dialog>
  );
};
