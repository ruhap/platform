import React from "react";

import type { RouterOutputs } from "@/utils/trpc";

type PostProps = {
  post: RouterOutputs["post"]["getFeed"][0];
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex gap-2">{post.content}</div>
    </div>
  );
};

export default Post;
