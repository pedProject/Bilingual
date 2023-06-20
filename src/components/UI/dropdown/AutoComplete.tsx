import React from "react";

import { Autocomplete, styled } from "@mui/material";

import { Input } from "../input/Input";

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
    <Autocomplete
      fullWidth
      onChange={handleValueChange}
      options={optionList}
      clearIcon={null}
      getOptionLabel={(option) => option.label as string}
      renderInput={(params) => <StyledInput {...params} label={label} />}
    />
  );
};

const StyledInput = styled(Input)(() => ({
  height: "46px"
}));
