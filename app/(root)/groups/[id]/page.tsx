import { getServerSession } from "next-auth";
import React from "react";

import AboutCard from "@/components/group/AboutCard";
import ActiveMembers from "@/components/group/ActiveMembersCard";
import AdminsCard from "@/components/group/AdminsCard";
import RankingCard from "@/components/group/RankingCard";
import RecentMeetupsCard from "@/components/group/RecentMeetupsCard";
import StatsCard from "@/components/group/StatsCard";
import InfiniteScroll from "@/components/profile/InfiniteScroll";
import GroupNavbar from "@/components/shared/header/GroupNavbar";
import { authOptions } from "@/lib/auth";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { postType: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions);
  const resUser = await fetch(
    `http://localhost:3005/api/user/${session?.user.id}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await resUser.json();
  const groupRes = await fetch(
    `http://localhost:3005/api/group/${params?.id}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const groupData = await groupRes.json();
  console.log("groupData", groupData);
  if (!groupRes.ok) throw new Error("Failed to fetch group data");
  let type = searchParams.postType ?? "standard";
  if (type instanceof Array) type = type[0];
  let resContent;
  if (!["standard", "meetup", "podcast", "members"].some((t) => t === type))
    type = "standard";
  if (type !== "members") {
    resContent = await fetch(
      `http://localhost:3005/api/group/${params?.id}/content?postType=${type.toUpperCase()}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    resContent = await fetch(
      `http://localhost:3005/api/group/${params?.id}/members`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  const contentData = await resContent.json();
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <aside className="border-0lg:sticky relative flex shrink-0 flex-col items-start gap-5 lg:left-0 lg:top-0 lg:min-w-[210px]">
        <AboutCard group={groupData} />
        <StatsCard group={groupData} />
        <RankingCard />
      </aside>
      <div className="flex size-full flex-col items-center gap-5 ">
        <GroupNavbar type={type} />
        <InfiniteScroll
          user={userData}
          type={type}
          initialContent={contentData}
        />
      </div>
      <aside className="relative flex flex-col items-end gap-5 dark:bg-dark-900 md:min-w-[325px] lg:sticky lg:right-0 lg:top-0">
        <RecentMeetupsCard group={groupData} />
        <ActiveMembers group={groupData} />
        <AdminsCard group={groupData} />
      </aside>
    </div>
  );
};

export default Page;
