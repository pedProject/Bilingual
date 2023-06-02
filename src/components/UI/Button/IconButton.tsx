import type { SVGProps } from "react";

import { styled } from "@mui/material";

interface IIconButtonProps {
  icon: React.ReactNode | React.ReactElement<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return <Button onClick={onClick}>{icon}</Button>;
};

const Button = styled("button")`
  cursor: pointer;
  border: none;
  background: none;
`;
