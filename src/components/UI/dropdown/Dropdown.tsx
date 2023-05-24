import React, { useState } from "react";

import { Autocomplete, InputLabel, TextField, styled } from "@mui/material";

export interface User {
  id: string;
  value: string;
}

interface DropdownProps {
  onSelectUser: (user: User | null) => void;
  containerClassName?: string;
  userList: User[];
}

export const Dropdown = ({ onSelectUser, containerClassName, userList }: DropdownProps) => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleValueChange = (event: React.SyntheticEvent, newValue: User | null) => {
    if (newValue) {
      setSelectedUsers([newValue]);
    } else {
      setSelectedUsers([]);
    }
    onSelectUser(newValue);
  };

  return (
    <div className={containerClassName ? containerClassName : ""}>
      <Autocomplete
        fullWidth
        onChange={handleValueChange}
        options={userList}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <>
            <InputLabel>hello</InputLabel>
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
