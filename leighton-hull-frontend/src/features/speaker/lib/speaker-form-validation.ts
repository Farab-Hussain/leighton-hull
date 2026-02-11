import z from "zod";

export const schemaForSpeakerForm = z.object({
  name: z.string().min(1, { message: "Please enter your full name." }).min(2, { message: "Name must be at least 2 characters." }),
  organization: z.string().min(1, { message: "Please enter your organization's name." }),
  date: z
    .string()
    .min(1, { message: "Please enter the event date." })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Please enter date in DD/MM/YYYY format." })
    .refine(
      dateStr => {
        const [day, month, year] = dateStr.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
      },
      { message: "Please enter a valid date." }
    )
    .refine(
      dateStr => {
        const [day, month, year] = dateStr.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
      },
      { message: "Event date cannot be in the past." }
    ),
  eventType: z.string().min(1, { message: "Please specify the type of event." }),
  email: z.string().email({ message: "Please enter a valid email address." })
});

export const handleDateValidation = ({ val, date, setDate, setErrorForDate }: IForDateValidation) => {
  if (val.length < date.length) {
    let cleanedVal = val;
    if (date.length > val.length && (date[val.length] === "/" || val.endsWith("/"))) {
      cleanedVal = val.replace(/\/$/, "");
    }
    setDate(cleanedVal);
    const result = schemaForSpeakerForm.shape.date.safeParse(cleanedVal);
    setErrorForDate(result.success ? "" : result.error.issues[0]?.message || "");
    return;
  }

  let formatted = val.replace(/\D/g, "");

  if (formatted.length >= 3) {
    formatted = formatted.substring(0, 2) + "/" + formatted.substring(2);
  }
  if (formatted.length >= 6) {
    formatted = formatted.substring(0, 5) + "/" + formatted.substring(5, 9);
  }

  if (formatted.length > 10) {
    formatted = formatted.substring(0, 10);
  }

  setDate(formatted);
  const result = schemaForSpeakerForm.shape.date.safeParse(formatted);
  setErrorForDate(result.success ? "" : result.error.issues[0]?.message || "");
};
