import { z } from "zod";
export const orderSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  phone: z.string().trim().min(9, "Valid phone number is required."),
  address: z.string().trim().min(5, "Delivery address is required."),
  paymentMethod: z.enum(["Cash on Delivery", "Telebirr", "Card"]),
  items: z.array(z.object({ dishId: z.string(), quantity: z.number().int().positive() })).min(1, "Your cart is empty.")
});
