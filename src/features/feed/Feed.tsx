import React from "react";
import { trpc } from "@/utils/trpc";
import Post from "./Post";
import Link from "next/link";

const Feed = () => {
  const { data, isLoading, isError } = trpc.post.getFeed.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      {data.map((post) => {
        return (
          <Link key={post.id} href={`/status/${post.id}`}>
            <Post post={post} />
          </Link>
        );
      })}
    </>
  );
};

export default Feed;
