import { FunctionComponent } from "react";

type Props = {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export const IconButton = ({ Icon, onClick }: Props): JSX.Element => {
  return (
    <div>
      <Icon onClick={onClick} />
    </div>
  );
};
