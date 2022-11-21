import React from "react";
import { trpc } from "@/utils/trpc";
import Post from "./Post";

const Feed = () => {
  const { data, isLoading, isError } = trpc.post.getFeed.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      {data.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default Feed;
