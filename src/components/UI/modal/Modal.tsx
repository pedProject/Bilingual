import type { ReactNode } from "react";

import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material";

import { CloseIcon } from "../../../assets";

import type { ModalProps } from "@mui/material";

type IModalProps = ModalProps & {
  onClose: () => void;
  closeIcon?: boolean;
  actionsElement?: ReactNode;
  children: ReactNode;
};

export const Modal = ({
  open,
  onClose,
  children,
  actionsElement,
  closeIcon = false,
  ...props
}: IModalProps): JSX.Element => {
  const viewActions = () => {
    if (actionsElement) {
      return actionsElement;
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} {...props}>
      {closeIcon && (
        <StyledDialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
      )}
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
