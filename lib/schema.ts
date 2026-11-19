import { z } from "zod";

export const pilotRequestSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization name is required"),
  workEmail: z.string().email("Please provide a valid work email"),
  eventType: z.enum([
    "pilgrimage_religious",
    "stadium_sports",
    "concert_festival",
    "convention_expo",
    "transit_hub",
    "public_rally_civic",
    "other",
  ], {
    errorMap: () => ({ message: "Please select an event category" }),
  }),
  expectedAttendance: z.enum([
    "10k_to_50k",
    "50k_to_200k",
    "200k_to_500k",
    "500k_plus",
  ], {
    errorMap: () => ({ message: "Please select expected attendance range" }),
  }),
  message: z.string().min(10, "Please briefly describe your gathering context (min 10 chars)"),
  honeypot: z.string().max(0, "Automated submission blocked"),
});

export type PilotRequestInput = z.infer<typeof pilotRequestSchema>;

