import { Menu as MuiMenu, styled } from "@mui/material";

import type { MenuProps } from "@mui/material";

interface IMenuProps {
  onClose: () => void;
  vertical?: number | "center" | "bottom" | "top";
  horizontal?: number | "center" | "left" | "right";
}

export const Menu = ({
  children,
  open,
  onClose,
  vertical = "bottom",
  horizontal = "left",
  anchorEl,
  ...props
}: IMenuProps & MenuProps): JSX.Element => {
  return (
    <StyledMenu
      {...props}
      open={open}
      onClose={onClose}
      PopoverClasses={{ paper: "paper" }}
      anchorOrigin={{
        vertical,
        horizontal
      }}
      anchorEl={anchorEl}
      disablePortal
      autoFocus={false}
    >
      {children}
    </StyledMenu>
  );
};

const StyledMenu = styled(MuiMenu)(() => ({
  "& .paper": {
    background: "#fffff",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "0",
    minWidth: "142px"
  },
  "& .MuiMenuItem-root": {
    color: "#292929",
    transitionDuration: "0.3s"
  },

  "&:hover .MuiMenuItem-root": {
    background: "transparent"
  }
}));
