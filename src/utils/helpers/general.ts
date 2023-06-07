export const getFileName = (file: File | null): string => {
  return file ? file.name : "";
};
