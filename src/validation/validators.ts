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

export const getPostSchema = z.object({
  id: z.string(),
});

export const createCommentSchema = z.object({
  postId: z.string(),
  content: z.string(),
});

export const profileSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(4).optional(),
  username: z.string().min(1).optional(),
  image: z.string().optional(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;
export type INewPost = z.infer<typeof newPostSchema>;
export type IProfile = z.infer<typeof profileSchema>;
export type IPost = z.infer<typeof getPostSchema>;
export type ICreateComment = z.infer<typeof createCommentSchema>;
