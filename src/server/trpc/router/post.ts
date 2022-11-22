import { router, publicProcedure, protectedProcedure } from "../trpc";
import { newPostSchema } from "@/validation/validators";

export const postRouter = router({
  getFeed: publicProcedure.query(({ ctx }) => {
    const feed = ctx.prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });
    return feed;
  }),
  create: protectedProcedure
    .input(newPostSchema)
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.create({
        data: {
          userId: ctx.session.user.id,
          content: input.content,
        },
      });

      return { ...post, creator: ctx.session.user.name };
    }),
});
