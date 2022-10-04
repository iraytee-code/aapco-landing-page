import React, { Fragment } from "react";

const StatisticsCard = ({ units, label }) => {
  return (
    <Fragment>
      <div className="py-2 md:py-1 md:w-[25%] md:border-r-[1px] md:border-r-gray">
        <div className="text-purple  font-bold text-[24px]">{units}</div>
        <div className="">{label}</div>
      </div>
    </Fragment>
  );
};

export default StatisticsCard;
