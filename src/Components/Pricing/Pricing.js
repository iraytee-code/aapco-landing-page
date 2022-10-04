import React, { Fragment } from "react";
import basic from  '../../Assets/images/basic.svg';
import standard from '../../Assets/images/standard.svg';
import unlimited from '../../Assets/images/unlimited.svg';

const Pricing = () => {
  return (
    <Fragment>
      <div className="px-2 md:px-6 xl:px-navx">
        <div className="text-center py-10 md: px-20">
          <h2 className="text-indigo font-semibold py-2">
            OUR PRICING PACKAGE
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[700] pb-4'">
            Affordable Pricing and Packages Choose your Best One
          </h1>
          <p className="text-gray leading-7">
            Distinctively brand cutting-edge imperatives through synergistic
            strategize orthogonal relationships whereas infrastructures
            customize low-risk high-yield processes rather than user friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 pb-20">
          <div className="rounded-2xl hover:text-indigo text-white flex flex-col justify-between items-center shadow-lg p-10 border-t-4 hover:rounded-3xl w-[90]">
            <h2 className="text-2xl md:text-3xl bold pb-5 text-indigo">Basic</h2>
            <div className="w-[65px] pb-5"><img src={basic} alt='basic'/></div>
            <p className="w-50 h-30 text-gray leading-7 text-center">
              5 Users access same time Integrated eCommerce Customization
              interface Weekly updated 24/7 Phone Support Event Analytics
            </p>
            <h4 className="text-indigo text-4xl font-bold py-5">$29</h4>
            <div>
              <button className="w-[140px] h-[50px] border-2 text-indigo hover:text-white hover:bg-indigo px-4 py-2 bg-white rounded-full">Purchase now</button>
            </div>
          </div>

          <div className="rounded-2xl text-indigo flex flex-col justify-between items-center shadow-lg p-10 border-t-4 hover:rounded-3xl w-[90]">
          <h2 className="text-2xl md:text-3xl bold pb-5">Standard</h2>
            <div className="w-[65px] pb-5"><img src={standard} alt='standard'/></div>
            <p className="w-50 text-gray leading-7 text-center">
              10 Users access same time Integrated eCommerce Customization
              interface Daily updated 24/7 Phone Support Event Analytics
            </p>
            <h4 className="text-indigo text-4xl font-bold py-5">$145</h4>
            <div>
            <button className="w-[140px] h-[50px] border-2 text-white px-4 py-2 bg-indigo hover:text-indigo hover:bg-white rounded-full">Purchase now</button>
            </div>
          </div>
          <div className="rounded-2xl hover:text-indigo  text-white flex flex-col justify-between items-center shadow-lg p-10 border-t-4 hover:rounded-3xl w-[90]">
          <h2 className="text-2xl md:text-3xl bold pb-5 text-indigo">Unlimited</h2>
            <div className="w-[65px] pb-5"><img src={unlimited} alt='standard'/></div>
            <p className="w-50 text-gray leading-7 text-center">
              20 Users access same time Integrated eCommerce Fully Customization
              interface Free updated 24/7 Phone Support Event Analytics
            </p>
            <h4 className="text-indigo text-4xl font-bold py-5">$249</h4>
            <div>
            <button className="w-[140px] h-[50px] border-2 text-indigo hover:text-white hover:bg-indigo px-4 py-2 bg-white rounded-full">Purchase now</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray">
            If you need custom services or Need more? <span className="text-xl text-indigo"> Contact us</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
