import { getServerSession } from "next-auth";
import React from "react";

import { CreateGroupForm } from "@/components/create/CreateGroupForm";
import { authOptions } from "@/lib/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  return (
    <section className="flex items-center justify-center">
      <CreateGroupForm creatorId={userId} />
    </section>
  );
};

export default Page;
