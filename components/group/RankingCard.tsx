import Image from "next/image";
import React from "react";

const RankingCard = () => {
  return (
    <div className="flex shrink-0 flex-col gap-3.5 rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
        Top Ranked
      </p>
      <div className="flex gap-2">
        <Image
          src="/assets/jsmastery.png"
          alt="group image"
          width={31}
          height={31}
          className="size-[31px] rounded-xl"
        />
        <div className="flex w-full flex-col">
          <p className="paragraph-2-medium w-full text-dark-700 dark:text-white-200">
            JavaScript Mastery
          </p>
          <p className="paragraph-4-regular text-white-400">
            4034 Posts Published
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Image
          src="/assets/jsmastery.png"
          alt="group image"
          width={31}
          height={31}
          className="size-[31px] rounded-xl"
        />
        <div className="flex w-full flex-col">
          <p className="paragraph-2-medium w-full text-dark-700 dark:text-white-200">
            JavaScript Mastery
          </p>
          <p className="paragraph-4-regular text-white-400">
            4034 Posts Published
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Image
          src="/assets/jsmastery.png"
          alt="group image"
          width={31}
          height={31}
          className="size-[31px] rounded-xl"
        />
        <div className="flex w-full flex-col">
          <p className="paragraph-2-medium w-full text-dark-700 dark:text-white-200">
            JavaScript Mastery
          </p>
          <p className="paragraph-4-regular text-white-400">
            4034 Posts Published
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
