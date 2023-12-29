import { z } from "zod";
import { userSchema } from "./user.schema";

export const spendingSchema = z.object({
	id: z.number(),
	icon: z.string(),
	name: z.string(),
	amount: z.number(),
	budget: z.number(),
	participants: z.array(userSchema),
});
export type Spending = z.infer<typeof spendingSchema>;
