import type { FunctionComponent } from "react";

interface IIconButtonProps {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const IconButton = ({ Icon, onClick }: IIconButtonProps): JSX.Element => {
  return <Icon onClick={onClick} />;
};
