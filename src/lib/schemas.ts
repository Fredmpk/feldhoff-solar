import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z
    .string()
    .min(5)
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Ungültige Telefonnummer"),
  message: z.string().min(2),
});
