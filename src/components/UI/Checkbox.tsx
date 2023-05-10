import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import { ReactComponent as UnCheckedIcon } from "../../assets/icons/unchecked.svg";

export const Checkboxx = (): JSX.Element => {
  return (
    <>
      <Checkbox checkedIcon={<CheckedIcon />} icon={<UnCheckedIcon />} />
    </>
  );
};
