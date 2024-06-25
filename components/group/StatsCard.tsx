import React from "react";

const StatsCard = ({ group }: GroupCard) => {
  console.log(group);
  return (
    <div className="flex w-full shrink-0 flex-col gap-3.5 rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
      <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
        Statistical Highlights
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-1">
          <p className="text-primary1-500"> 300 </p>
          <p className="text-dark-800 dark:text-white-200"> Posts </p>
        </div>
        <div className="flex w-full gap-1">
          <p className="text-primary1-500"> 2831 </p>
          <p className="text-dark-800 dark:text-white-200"> Members </p>
        </div>
        <div className="flex w-full gap-1">
          <p className="text-primary1-500"> 2831 </p>
          <p className="text-dark-800 dark:text-white-200"> Members </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
