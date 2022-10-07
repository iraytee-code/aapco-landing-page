import React, { Fragment } from "react";

const PricingCard = ({ title, image, description, price }) => {
  return (
    <Fragment>
      <div className="rounded-2xl hover:text-indigo text-white flex flex-col justify-between items-center shadow-lg p-10 border-t-4 hover:rounded-3xl w-[90]">
        <h2 className="text-2xl md:text-3xl font-bold pb-5 text-black">{title}</h2>
        <div className="w-[65px] pb-5"><img src={image}/></div>
        <p className="w-50 h-30 text-gray leading-7 text-center">
          {description}
        </p>
        <h4 className="text-indigo text-4xl font-bold py-5">{price}</h4>
        <div>
          <button className="w-[140px] h-[50px] border-2 text-indigo hover:text-white hover:bg-indigo px-4 py-2 bg-white rounded-full">
            Purchase now
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PricingCard;
