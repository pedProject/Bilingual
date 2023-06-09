import type { CSSProperties } from "react";
import React from "react";

import { styled } from "@mui/material";
import { useDropzone } from "react-dropzone";

import type { DropzoneOptions, Accept } from "react-dropzone";

type FileType = "audio" | "image";

interface DropzoneContainerProps extends DropzoneOptions {
  children: React.ReactNode;
  type?: FileType;
  customAcceptType?: () => Accept;
  sx?: Pick<CSSProperties, "width" | "height">;
}

const ACCEPTED_FILE_TYPES = {
  audio: {
    "audio/*": [".mp3", ".mpeg", ".wav", ".ogg"]
  },
  image: {
    "image/*": [".png", ".jpg", ".svg"]
  }
};

export const DropzoneContainer = ({
  children,
  onDrop,
  type = "audio",
  customAcceptType,
  multiple,
  sx
}: DropzoneContainerProps) => {
  const accept = customAcceptType ? customAcceptType() : ACCEPTED_FILE_TYPES[type];

  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    onDrop,
    accept
  });

  return (
    <RootContainer {...getRootProps()} sx={{ ...sx }}>
      <input {...getInputProps()} />
      {children}
    </RootContainer>
  );
};

const RootContainer = styled("div")(() => ({}));
