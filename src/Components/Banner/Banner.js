import React, { Fragment } from "react";
import bannerImg from "../../Assets/images/banner_img.png";

const Banner = () => {
  return (
    <Fragment>
      <div className="Banner flex flex-col justify-between items-center md:flex-row py-5 px-6 text-sm xl:px-navx xl: px-15rem relative md:h-[85vh]">
        <div className="text-white z-20 sm:w-[80%] max-w-[540px] md:w-[600px] leading-7">
          <div>
            <p className="font-thick text-lg">CUSTOMER FIRST PROIRITY</p>
            <h1 className="font-bold text-4xl md:text-5xl pb-4 pt-1">
              We Deliver Your Product More Faster
            </h1>
            <p className="font-thick text-lg leading-10">
              Quickly morph client-centric results through performance based
              applications. Proactively facilitate professional human capital
              for cutting-edge.
            </p>
          </div>
          <div>
            <button className="border-2 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-purple hover:border-white my-4">
              Download Now
            </button>
          </div>
        </div>
        <div>
          <div className=" sm:w-[80%] max-w-[450px] z-20 relative md:w-[350px] lg:w-[450px]">
            <img src={bannerImg} alt="banner img" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
