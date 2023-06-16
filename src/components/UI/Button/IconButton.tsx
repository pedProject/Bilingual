import type { SVGProps } from "react";

import { IconButton as MuiIconButton } from "@mui/material";

import type { IconButtonProps } from "@mui/material";

type IIconButtonProps = IconButtonProps & {
  icon: React.ReactNode | React.ReactElement<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return <MuiIconButton onClick={onClick}>{icon}</MuiIconButton>;
};
