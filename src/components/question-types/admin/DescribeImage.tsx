/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";

import { Box, styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Button } from "../../UI/Button/Button";
import { DropzoneContainer } from "../../UI/dropzone/DropzoneContainer";
import { FileName } from "../../UI/dropzone/FileName";
import { Input } from "../../UI/input/Input";

enum FIELDS {
  FILE = "image",
  CORRECT_ANSWER = "correctAnswer"
}

export const DescribeImage = () => {
  const { register, unregister, setValue, watch } = useFormContext();

  const existingImage: File | null = watch(FIELDS.FILE) || null;

  const imagePreview = existingImage ? URL.createObjectURL(existingImage) : "";

  const onDropImage = useCallback(
    (acceptedFiles: File[]) => {
      setValue(FIELDS.FILE, acceptedFiles[0], { shouldValidate: true });
    },
    [setValue]
  );

  useEffect(() => {
    register(FIELDS.FILE);
    return () => {
      unregister(FIELDS.FILE);
    };
  }, []);

  return (
    <Container>
      <FileContainer>
        <DropzoneBox>
          {!existingImage && (
            <DropzoneContainer
              sx={{ width: "100%", height: "100%" }}
              onDrop={onDropImage}
              type="image"
            >
              <UploadImageBox>Upload image</UploadImageBox>
            </DropzoneContainer>
          )}

          {existingImage && imagePreview && (
            <DroppedImageContainer>
              <img src={imagePreview} alt={existingImage.name} className="dropped-image" />
              <Overlay id="overlay">
                <DropzoneContainer type="image" onDrop={onDropImage}>
                  <ReplaceButton>Replace</ReplaceButton>
                </DropzoneContainer>
              </Overlay>
            </DroppedImageContainer>
          )}
        </DropzoneBox>
        {existingImage && <FileName file={existingImage} maxWidth="500" />}
      </FileContainer>

      <Input label={"Correct answer"} {...register(FIELDS.CORRECT_ANSWER)} />
    </Container>
  );
};

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "24px"
}));
const FileContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center"
}));

const DropzoneBox = styled("div")(() => ({
  width: "180px",
  height: "178px"
}));

const Overlay = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  visibility: "hidden",
  opacity: 0,
  transition: "all 0.2s ease-in-out",
  display: "grid",
  placeItems: "center",
  borderRadius: "8px"
}));

const DroppedImageContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  background: "#f8f8f8",
  position: "relative",
  borderRadius: "8px",
  "&:hover > #overlay": {
    visibility: "visible",
    opacity: 1
  },
  "& .dropped-image": {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }
}));

const UploadImageBox = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "grid",
  border: "1.53px solid #D4D0D0",
  borderRadius: "8px",
  placeItems: "center",
  fontFamily: "DIN Next",
  fontSize: "1rem",
  fontWeight: 500,
  color: "#3A10E5",
  cursor: "copy"
}));

const ReplaceButton = styled(Button)(() => ({
  height: "26px",
  borderRadius: "4px",
  boxShadow: "0px 1px 2px rgba(31, 139, 36, 0.2), 0px 1px 2px rgba(31, 139, 36, 0.2)",
  fontSize: "0.75rem",
  "&:hover": {
    background: "#4E28E8"
  }
}));
