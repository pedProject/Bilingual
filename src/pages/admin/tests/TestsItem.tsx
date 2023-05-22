import { useState } from "react";

import { Box } from "@mui/material";

import { DeleteIcon, EditIcon } from "../../../assets";
import { Switcher } from "../../../components/UI/switcher/Switcher";

export const TestsItem = ({ id, testName }: { id: number; testName: string }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Box className="test" key={id}>
      <p>{testName}</p>

      <Box className="action">
        <Switcher value={isCheck} onChange={(e) => setIsCheck(e.target.checked)} />

        <EditIcon />

        <DeleteIcon />
      </Box>
    </Box>
  );
};
