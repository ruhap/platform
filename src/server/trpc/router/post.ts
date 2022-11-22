import { router, publicProcedure, protectedProcedure } from "../trpc";
import {
  newPostSchema,
  getPostSchema,
  createCommentSchema,
} from "@/validation/validators";

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
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    return feed;
  }),
  getPost: publicProcedure.input(getPostSchema).query(({ input, ctx }) => {
    const post = ctx.prisma.post.findFirst({
      where: {
        id: input.id,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        comments: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });
    return post;
  }),
  createPost: protectedProcedure
    .input(newPostSchema)
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.create({
        data: {
          userId: ctx.session.user.id,
          content: input.content,
        },
      });

      return post;
    }),
  createComment: protectedProcedure
    .input(createCommentSchema)
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.comment.create({
        data: {
          postId: input.postId,
          userId: ctx.session.user.id,
          content: input.content,
        },
      });

      return post;
    }),
});
