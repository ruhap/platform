import { useSession } from "next-auth/react";
import React from "react";

const RightSideBar = () => {
  const { data: session } = useSession();
  if (!session) return <div>No session</div>;

  return (
    <div className="hidden w-2/12 flex-col space-y-4 md:flex">
      <div className="w-full rounded-xl bg-white p-4">
        Sidebar
        {session ? <p>{session.user?.id}</p> : <p>Not logged in</p>}
      </div>
    </div>
  );
};

export default RightSideBar;
