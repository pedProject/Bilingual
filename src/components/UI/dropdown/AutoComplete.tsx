import React from "react";

import { Autocomplete, styled } from "@mui/material";

import { Input } from "../input/Input";

import type { OptionData } from "../../../types/testVerification";

interface Props {
  onChange: (option: OptionData) => void;
  options: OptionData[];
  label?: string;
  multiple?: boolean;
  value: OptionData;
}

export const AutoComplete = ({
  onChange,
  options,
  label,
  multiple = false,
  value,
  ...rest
}: Props) => {
  const handleValueChange = (
    event: React.SyntheticEvent,
    newValue: OptionData | OptionData[] | null
  ) => {
    if (!newValue) return;
    return onChange(newValue as OptionData);
  };
  return (
    <StyledAutoComplete
      fullWidth
      onChange={handleValueChange}
      options={options}
      clearIcon={null}
      multiple={multiple}
      getOptionLabel={(option) => option.label as string}
      renderInput={(params) => <StyledInput {...params} label={label} />}
      value={value}
      {...rest}
      classes={{ input: "auto-complete__input" }}
    />
  );
};

const StyledInput = styled(Input)(() => ({
  height: "46px"
}));

const StyledAutoComplete = styled(Autocomplete)(() => ({
  // eslint-disable-next-line quotes
  '& .auto-complete__input[aria-expanded="false"]': {
    textAlign: "center"
  }
})) as typeof Autocomplete;
