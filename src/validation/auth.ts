import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const registerSchema = loginSchema.extend({
  username: z.string(),
});

export const newPostSchema = z.object({
  content: z.string().min(1),
});

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;
export type INewPost = z.infer<typeof newPostSchema>;
