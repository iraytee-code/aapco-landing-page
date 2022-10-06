import React, { Fragment } from "react";
// import { IoMdCard } from "react-icons/io";
// import { BiCircle } from "react-icons/bi";
// import { FaBalanceScaleLeft } from "react-icons/fa";
// import { IoIosPaper } from "react-icons/io";
import { FeatureCard } from "../../Components";

const KeyFeature = () => {
  return (
    <Fragment>
      <div className="px-2 md:px-6 lg:px-36 pb-20 md:mt-20 md:pb-30">
        <div>
          <h3 className="text-indigo font-semibold py-2">KEY FEATURES</h3>
          <p className="text-2xl pb-20 sm:text-3xl md:text-4xl font-[700]">
            We Will Helps you to Build
            <br />
            Beautiful Websites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title="Modular"
            description="All components are built to be used in any combination."
          />
          <FeatureCard
            title="Responsive"
            description="Quick is optimized to work for most devices."
          />
          <FeatureCard
            title="Scalable"
            description="Remain consistent while developing new features."
          />
          <FeatureCard
            title="Customizable"
            description="Change a few variables and the whole theme adapts."
          />
          {/* <div className="py-4 px-4 rounded-xl drop-shadow-xl bg-white pb-10">
            <div className="py-1"><IoMdCard size='30' fill="indigo"/></div>
            <div>
              <h3 className="text-2xl">Modular</h3>
              <p className="text-gray">All components are built to be used in any combination.</p>
            </div>
          </div>

          <div className="py-4 px-4 rounded-xl drop-shadow-xl bg-white pb-10">
            <div className="py-1"><BiCircle size='30' fill="indigo"/></div>
            <div>
              <h3 className="text-2xl">Responsive</h3>
              <p className="text-gray">Quick is optimized to work for most devices.</p>
            </div>
          </div>

          <div className="py-4 px-4 rounded-xl drop-shadow-xl bg-white pb-10">
            <div className="py-1"><FaBalanceScaleLeft size='30' fill="indigo"/></div>
            <div>
              <h3 className="text-2xl">Scalable</h3>
              <p className="text-gray">Remain consistent while developing new features.</p>
            </div>
          </div>

          <div className="py-4 px-4 rounded-xl drop-shadow-xl bg-white pb-10">
            <div className="py-1"><IoIosPaper size='30' fill="indigo"/></div>
            <div>
              <h3 className="text-2xl">Customizable</h3>
              <p className="text-gray">Change a few variables and the whole theme adapts.</p>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default KeyFeature;
