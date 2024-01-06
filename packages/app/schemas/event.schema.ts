import { z } from "zod";
import { userSchema } from "./user.schema";

export const eventSchema = z.object({
	id: z.number(),
	image: z.string(),
	name: z.string(),
	category: z.string(),
	description: z.string(),
	start_date: z.number(),
	end_date: z.number(),
	participants: z.array(userSchema),
});
export type Event = z.infer<typeof eventSchema>;
