import { z } from "zod";

export interface OptionData {
  id: string;
  value: string;
  label?: string;
}

export const optionValidationSchema = z.object({
  title: z.string().min(1),
  isTrue: z.boolean()
});

export type OptionItem = z.infer<typeof optionValidationSchema>;

export const selectConceptValidationSchema = z.object({
  passage: z.string().min(1),
  options: z.array(optionValidationSchema)
});

export const testValidationSchema = z.object({
  title: z.string().min(1),
  duration: z.string().regex(/^[0-5][0-9]:[0-5][0-9]$/g)
});

// @TODO dynamic validation schema for all question types
// source: https://dev.to/franklin030601/dynamic-forms-with-react-hook-form-2ml8
