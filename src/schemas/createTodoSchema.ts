import { z } from "zod";

export const createTodoSchema = z.object({
  id: z.string(),
  title: z
    .string({ required_error: "Title is required" })
    .min(2, { message: "Title must be at least 2 characters" })
    .max(50, { message: "Title must be maximum 20 charscters" }),
  description: z
    .string()
    .max(200, { message: "Title must be maximum 200 charscters" }),
  completed: z.boolean(),
  //   doTo: z.string().datetime(),
  //   tags:
});

export type todoType = z.infer<typeof createTodoSchema>;
