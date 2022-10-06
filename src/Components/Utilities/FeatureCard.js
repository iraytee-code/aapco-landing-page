import React, { Fragment } from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <Fragment>
      <div className="py-4 px-4 rounded-xl drop-shadow-xl bg-white pb-10">
        <div>
          <h3 className="text-2xl">{title}</h3>
          <p className="text-gray">{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureCard;
