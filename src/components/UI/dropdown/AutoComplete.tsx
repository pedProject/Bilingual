import React from "react";

import { Autocomplete, InputLabel, TextField, styled } from "@mui/material";

import type { OptionData } from "../../../types/testVerification";

interface Props {
  onChange: (user: OptionData) => void;
  optionList: OptionData[];
  label?: string;
}

export const AutoComplete = ({ onChange, optionList, label }: Props) => {
  const handleValueChange = (event: React.SyntheticEvent, newValue: OptionData | null) => {
    if (newValue) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <Autocomplete
        fullWidth
        onChange={handleValueChange}
        options={optionList}
        clearIcon={null}
        getOptionLabel={(option) => option.label as string}
        renderInput={(params) => (
          <>
            <Label>{label}</Label>
            <StyledTextField {...params} />
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
