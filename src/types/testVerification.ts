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
