import React from "react";
import Image from "next/image";

import type { RouterOutputs } from "@/utils/trpc";

type PostProps = {
  post: RouterOutputs["post"]["getFeed"][0];
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={"https://randomuser.me/api/portraits/lego/1.jpg"}
          src={"https://randomuser.me/api/portraits/lego/1.jpg"}
        />

        {post.content}

        {post.updatedAt.toString()}
      </div>
    </div>
  );
};

export default Post;
