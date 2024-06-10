import React from "react";

const AboutCard = ({ group }: GroupCard) => {
  return (
    <div className="flex h-[222px] w-full shrink-0 flex-col gap-3.5 overflow-hidden rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
        About Group
      </p>
      <div className="flex h-full flex-col gap-2 overflow-hidden">
        <p className="paragraph-4-regular flex h-full text-white-400">
          {group.bio}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
