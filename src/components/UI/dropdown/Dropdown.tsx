import React, { useState } from "react";

import { Autocomplete, InputLabel, TextField, styled } from "@mui/material";

import type { IData } from "../../../types/testVerification";

interface DropdownProps {
  onSelectUser: (user: IData | null) => void;
  userList: IData[];
}

export const Dropdown = ({ onSelectUser, userList }: DropdownProps) => {
  const [selectedUsers, setSelectedUsers] = useState<IData[]>([]);

  const handleValueChange = (event: React.SyntheticEvent, newValue: IData | null) => {
    if (newValue) {
      setSelectedUsers([newValue]);
    } else {
      setSelectedUsers([]);
    }
    onSelectUser(newValue);
  };

  return (
    <div>
      <Autocomplete
        fullWidth
        onChange={handleValueChange}
        options={userList}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <>
            <Label>hello</Label>
            <StyledTextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: selectedUsers.length > 0 ? null : params.InputProps.endAdornment
              }}
            />
          </>
        )}
      />
    </div>
  );
};

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px"
  }
}));
const Label = styled(InputLabel)`
  &.MuiFormLabel-root {
    margin-bottom: 8px;
    font-family: "DINNextRoundedLTPro-Bold";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    color: #4b4759;
  }
`;
