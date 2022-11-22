import React from "react";
import Image from "next/image";
import moment from "moment";

import type { RouterOutputs } from "@/utils/trpc";
import Link from "next/link";

type PostProps = {
  post: RouterOutputs["post"]["getFeed"][0];
};

const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/status/${post.id}`}>
      <div className="w-full rounded-xl bg-white p-4">
        <div className="flex gap-2">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            alt={"https://randomuser.me/api/portraits/lego/1.jpg"}
            src={"https://randomuser.me/api/portraits/lego/1.jpg"}
          />
          <div>
            <div className="flex gap-2">
              <span className="font-bold">{post.user.username}</span>
              {/* <span className="">@{post.user.username}</span> */}
              <span className="font-light">
                {moment(post.updatedAt).fromNow()}
              </span>
            </div>

            {post.content}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
