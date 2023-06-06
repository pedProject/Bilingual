import React from "react";

import { useDropzone } from "react-dropzone";

import type { DropzoneOptions, Accept } from "react-dropzone";

type FileType = "audio" | "image";

interface DropzoneContainerProps extends DropzoneOptions {
  children: React.ReactNode;
  type?: FileType;
  customAcceptType?: () => Accept;
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
  multiple
}: DropzoneContainerProps): JSX.Element => {
  const accept = customAcceptType ? customAcceptType() : ACCEPTED_FILE_TYPES[type];

  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};
