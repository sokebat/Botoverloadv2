import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});



export type ContactFormValues = z.infer<typeof contactSchema>;
