import z from "zod";

export const addressDetailsSchema = z.object({
  constituency: z.string(),
  ward: z.string(),
  street: z.string(),
});

export type AddressDetailsInput = z.infer<typeof addressDetailsSchema>;
