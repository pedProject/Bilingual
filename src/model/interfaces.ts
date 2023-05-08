import React from "react";

export interface INTERFACE_INPUTPROPS {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  label?: string;
}
