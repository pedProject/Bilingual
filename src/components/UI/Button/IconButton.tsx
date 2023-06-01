import React from "react";

interface IIconButtonProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ElementType;
  onClick: () => void;
}

export const IconButton = ({ Icon, onClick }: IIconButtonProps) => {
  const IconComponent = Icon;

  return <IconComponent onClick={onClick} />;
};
