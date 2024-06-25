import Image from "next/image";
import React from "react";
const ActiveMembers = ({ group }: { group: Group }) => {
  console.log(group);
  return (
    <div className="flex w-full shrink-0 flex-col gap-3.5 overflow-hidden rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
        Active Members
      </p>
      <div className="flex gap-2">
        {group.members &&
          group.members.length > 0 &&
          group.members.map((user: GroupUser) => {
            return (
              <div key={user.userId}>
                <Image
                  width={30}
                  height={30}
                  src="/assets/emoji.png
                "
                  alt="user avatar"
                  className="size-[30px] rounded-full"
                />
              </div>
            );
          })}

        <div className="caption-cap-10 flex size-[30px] items-center justify-center rounded-full bg-white-200 text-dark-900 dark:bg-dark-700 dark:text-white-200">
          120+ {/*       {group?._count?.groupUser - group.members.length}+ */}
        </div>
      </div>
    </div>
  );
};

export default ActiveMembers;
