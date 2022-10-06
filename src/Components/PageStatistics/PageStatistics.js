import React, { Fragment } from "react";
import { StatisticsCard } from "../../Components";
import { data } from "../../data";

const PageStatistics = () => {
  console.log(data);

  return (
    <Fragment>
      <div className="bg-white rounded-md text-center py-10 drop-shadow-md md:flex md:w-[600px] md:mx-auto lg:w-[1000px] md:-mt-12 md:items-center md:justify-around">
        {data?.pageStatistics?.map((item, index) => {
          return (
            <StatisticsCard
              units={item.value}
              label={item.label}
              key={item.id}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default PageStatistics;
