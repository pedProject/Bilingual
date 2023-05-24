import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material";

import { CloseIcon } from "../../assets";

import type { ModalProps } from "@mui/material";

type Props = ModalProps & {
  onClose: () => void;
  closeIcon?: boolean;
};

export const Modal = ({
  open,
  onClose,
  children,
  closeIcon = false,
  ...props
}: Props): JSX.Element => {
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
