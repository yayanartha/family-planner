import { z } from "zod";

export const todoSchema = z.object({
	id: z.number(),
	title: z.string(),
	done: z.boolean(),
	color: z.string().optional(),
});
export type Todo = z.infer<typeof todoSchema>;
