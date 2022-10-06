import React, { Fragment } from "react";
import airbnb from "../../Assets/images/airbnb.png";
import Spotify from "../../Assets/images/spotify.png";
import Paypal from "../../Assets/images/paypal.png";
import John from "../../Assets/images/john.jpg";
import quote from "../../Assets/images/quote.png";
import {MdOutlineKeyboardArrowLeft} from  'react-icons/md';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Testimonial = () => {
  return (
    <Fragment>
      <div className=" py-20 md:flex justify-betwee items-end gap-10 px-2 md:px-6 xl:px-navx">
        <div className="my-10">
          <h2 className="text-indigo font-semibold pb-2 text-lg">
            OUR TRUSTED CLIENTS
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-[700] pb-4">
            What Clients Say About Us
          </h3>
          <p className="text-gray leading-7 md:leading-8">
            Rapidiously morph transparent internal or "organic" sources whereas
            resource sucking e-business. Conveniently innovate compelling
            internal.
          </p>
          <div className="grid grid-rows-2  grid-flow-col gap-4 mt-5 w-[70%] md:grid-rows-1 md:w-[100%]">
            <div>
              <img src={airbnb} alt="airbnb" className="w-[85px] m-0" />
            </div>
            <div>
              <img src={Paypal} alt="airbnb" className="w-[85px] m-0" />
            </div>

            <div>
              <img src={Spotify} alt="spotify" className="w-[85px] m-0" />
            </div>
          </div>

        </div>

        <div className="my-10">
          <div className="flex items-center pb-5">
            <div>
              <img src={John} alt="john" className="w-[65px] rounded-full" />
            </div>
            <div className="pl-3">
              <h5 className="font-bold">John Charles</h5>
              <p className="text-gray text-sm">Goolge</p>
            </div>
          </div>

          <p className="text-gray leading-7 md:w-[100%] pb-5">
            <img src={quote} className='inline w-[18px] xl:w-[26px]' alt="quote" />
         <span className="pl-3">Interactively optimize fully researched expertise vis-a-vis
            plug-and-play relationships. Intrinsicly develop viral core
            competencies for </span>
          </p>

          <div  className="flex justify-between w-[90px]">
            <button className="w-10 h-10 bg-white flex justify-center items-center rounded-full border-2 text-gray"><MdOutlineKeyboardArrowLeft fill="indigo"/></button>  <button className="w-10 h-10 bg-white flex justify-center items-center rounded-full border-2 text-gray"><MdOutlineKeyboardArrowRight fill="indigo"/></button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
