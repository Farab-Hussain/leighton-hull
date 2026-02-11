import z from "zod";

export const schemaForContactForm = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  typeOfInquiry: z.string().min(1, "Please enter the type of inquiry."),
  message: z.string().min(1, "Please write a short message.")
});
