import React, { Fragment } from "react";

const Count = () => {
  return (
    <Fragment>
      <div className="Count md:px-6 xl:px-navx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white mx-2 my-6  rounded drop-shadow-xl -mt-[5%]">
          <div className="text-center py-7 md:border-r-2 border-bdColor">
            <h2 className="text-indigo text-textb font-bold">2350</h2>
            <p className="text-secondary">Happy Client</p>
          </div>

          <div className="text-center py-7 lg:border-r-2 border-bdColor">
            <h2 className="text-indigo text-textb font-bold">2150</h2>
            <p className="text-secondary">App Download</p>
          </div>

          <div className="text-center py-7 md:border-r-2 border-bdColor">
            <h2 className="text-indigo text-textb font-bold">2350</h2>
            <p className="text-secondary">Total Rates</p>
          </div>

          <div className="text-center py-7">
            <h2 className="text-indigo text-textb font-bold">2250</h2>
            <p className="text-secondary">Awards win</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Count;
