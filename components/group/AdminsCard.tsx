import Image from "next/image";
import React from "react";
const AdminsCard = ({ group }: { group: Group }) => {
  return (
    <div className="flex w-full shrink-0 flex-col gap-3.5 overflow-hidden rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
        Group Admins
      </p>
      <div className="flex gap-2">
        {group.members &&
          group.members.length > 0 &&
          group.members.map((user: GroupUser) => {
            console.log(user);
            if (user.isAdmin) {
              return (
                <div
                  key={user.userId}
                  className="paragraph-3-medium flex items-center  gap-2 dark:text-white-300"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/assets/emoji.png
                "
                    alt="user avatar"
                    className="size-[30px] rounded-full"
                  />
                  <p>{user?.user.profile?.name && user?.user?.profile.name}</p>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default AdminsCard;
