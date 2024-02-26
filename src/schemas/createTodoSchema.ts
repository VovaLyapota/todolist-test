import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters" })
    .max(20, { message: "Title must be maximum 20 charscters" }),
  description: z
    .string()
    .max(200, { message: "Title must be maximum 200 charscters" }),
  doTo: z.string().datetime(),
  //   tags:
});
