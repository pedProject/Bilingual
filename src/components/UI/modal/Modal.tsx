import type { ReactNode } from "react";

import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material";

import { CloseIcon } from "../../../assets";

import type { ModalProps } from "@mui/material";

interface IModalProps {
  onClose: () => void;
  closeIcon?: boolean;
  actionsElement: ReactNode;
}
export const Modal = ({
  open,
  onClose,
  children,
  actionsElement,
  closeIcon = false,
  ...props
}: IModalProps & ModalProps): JSX.Element => {
  const viewActions = () => {
    if (actionsElement) {
      return actionsElement;
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} {...props}>
      {closeIcon ? (
        <StyledDialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
      ) : null}
      <DialogContent>{children}</DialogContent>
      {viewActions()}
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "20px",
    width: "100%"
  }
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "20px"
}));
