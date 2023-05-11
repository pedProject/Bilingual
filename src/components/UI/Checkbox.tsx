import { Checkbox as MuiCheckbox } from "@mui/material";

import { CheckedIcon, UnCheckedIcon } from "./../../assets/index";

type Props = {
  value: boolean | undefined;
  onChange: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Checkbox = ({ value, onChange }: Props): JSX.Element => {
  return (
    <MuiCheckbox
      checkedIcon={<CheckedIcon />}
      icon={<UnCheckedIcon />}
      checked={value}
      onChange={onChange}
    />
  );
};
