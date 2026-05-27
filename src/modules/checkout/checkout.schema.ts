import z from "zod";

export const checkoutSchema = z
  .object({
    fulfillmentMethod: z.enum(["pickup", "delivery"], "Please select an option"),
    constituency: z.string().optional(),
    ward: z.string().optional(),
    street: z.string().optional(),
    paymentMethod: z.enum(["cash", "mpesa"], "Please select an option"),
    mpesaPhone: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Delivery address required
    if (data.fulfillmentMethod === "delivery" && !data.constituency) {
      ctx.addIssue({
        code: "custom",
        path: ["constituency"],
        message: "Constituency is required",
      });
    }
    if (data.fulfillmentMethod === "delivery" && !data.ward) {
      ctx.addIssue({
        code: "custom",
        path: ["ward"],
        message: "Ward is required",
      });
    }
    if (data.fulfillmentMethod === "delivery" && !data.street) {
      ctx.addIssue({
        code: "custom",
        path: ["street"],
        message: "Street address is required",
      });
    }
    // Mpesa phone required
    if (data.paymentMethod === "mpesa" && !data.mpesaPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["mpesaPhone"],
        message: "Mpesa phone number is required",
      });
    }
  });

export type CheckoutInput = z.infer<typeof checkoutSchema>;
