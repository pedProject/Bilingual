import type { FunctionComponent } from "react";

type Props = {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export const IconButton = ({ Icon, onClick }: Props): JSX.Element => {
  return <Icon onClick={onClick} />;
};
