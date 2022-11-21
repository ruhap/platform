import { router } from "../trpc";
import { protectedRouter } from "./protected";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { postRouter } from "./post";

export const appRouter = router({
  example: exampleRouter,
  protected: protectedRouter,
  auth: authRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
