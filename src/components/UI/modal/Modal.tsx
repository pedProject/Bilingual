import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material";

import { CloseIcon } from "../../../assets";

import type { ModalProps } from "@mui/material";

interface IModalProps {
  onClose: () => void;
  isCloseIcon?: boolean;
}

export const Modal = ({
  open,
  onClose,
  children,
  isCloseIcon = false,
  ...props
}: IModalProps & ModalProps): JSX.Element => {
  return (
    <StyledDialog open={open} onClose={onClose} {...props}>
      {isCloseIcon ? (
        <StyledDialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
      ) : null}
      <DialogContent>{children}</DialogContent>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "20px"
  }
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "20px"
}));