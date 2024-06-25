import { ArrowRightIcon } from "lucide-react";
import React from "react";

import PostTags from "../shared/tags/PostTags";

const RecentMeetupsCard = ({ group }: { group: Group }) => {
  console.log(group);
  return (
    <div className="flex w-full shrink-0 flex-col gap-3.5 overflow-hidden rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <div className="paragraph-2-bold flex items-center text-dark-800 dark:text-white-200">
        Meetups
        <div className="text-white-400">
          <ArrowRightIcon />
        </div>
      </div>
      {/* MAP FOR MEETUPS HERE */}
      <div className="flex w-full gap-3">
        <div className=" flex flex-col items-center justify-center gap-2 rounded-md bg-white-200 px-4 py-1.5 text-white-300 dark:bg-dark-700 dark:text-primary1-500">
          <p className="uppercase text-dark-900 dark:text-white-200">
            TBD {/*  {meetDate ? month : "TBD"} */}
          </p>
          <p className="display-2-bold text-primary1-500">
            -- {/*    {meetDate ? day : "--"} */}
          </p>
        </div>
        <div className="flex flex-col gap-2 overflow-hidden">
          <p className="paragraph-3-medium line-clamp-1 max-w-full overflow-hidden break-all text-dark-800 dark:text-white-300">
            QuantumCraft Conclave - Exploring the Quantum Realms in Code
          </p>
          <div className="flex items-center gap-1.5">
            <div className="caption-cap-10 flex size-[20px] items-center justify-center rounded-full bg-white-200 text-dark-900 dark:bg-dark-700 dark:text-white-200"></div>
            <p className="subtitle-small text-white-400 ">
              QuantumCraft Labs, San Francisco
            </p>
          </div>
          <div className="flex items-center gap-1">
            <PostTags label="Tech" />
            <PostTags label="Tech" />
            <PostTags label="Tech" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentMeetupsCard;
