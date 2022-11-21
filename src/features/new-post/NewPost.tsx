import React from "react";
import { useState } from "react";

import { BiNews } from "react-icons/bi";

const NewPost = () => {
  const [isNewPost, setIsNewPost] = useState(false);
  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="flex gap-2">
        <span
          onClick={() => (isNewPost ? setIsNewPost(false) : setIsNewPost(true))}
          className="rounded-full bg-slate-200 p-2"
        >
          <BiNews />
        </span>
      </div>
      {isNewPost && (
        <form className="mt-2 flex w-full items-center gap-2 rounded-xl bg-slate-100 py-2 px-4">
          <textarea
            className="w-full resize-none bg-slate-100 text-slate-400 focus:outline-none"
            placeholder="New Post"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NewPost;
