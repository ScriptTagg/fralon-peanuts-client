import z from "zod";

export const checkoutSchema = z.object({
  fulfillmentMethod: z.enum(['pickup', 'delivery']),
  constituency:z.string(),
  ward:z.string(),
  street:z.string(),
  paymentMethod:z.enum(['cash','mpesa']),
    mpesaPhone:z.string()
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
