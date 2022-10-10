import React, { Fragment } from "react";
import stripeimg from "../../Assets/images/stripe.png";
import spotifyimg from "../../Assets/images/spotify.png";
import slackimg from "../../Assets/images/slack.png";
import shopbotimg from "../../Assets/images/shopbot.png";
import Paypal from "../../Assets/images/paypal.png";
import airbnbimg from "../../Assets/images/airbnb.png";
import amazonimg from "../../Assets/images/amazon.png";
import PartnerComponent from "../Utilities/PartnerComponent";
const Partners = () => {
  return (
    <Fragment>
      <div className="py-20 px-2 md:px-6 lg:px-36">
        <div className=" text-center flex flex-col justify-center items-center">
          <div className="text-indigo font-semibold py-6">LOVELY CLIENTS</div>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5 text-black">
            Trusted by Companies
          </div>
          <div className="text-gray leading-7 pt-5">
            Rapidiously morph transparent internal develop economically sound
            core competencies sources
          </div>
          <div className="text-gray leading-7 pb-5">
            {" "}
            whereas resource sucking e-business. Conveniently innovate
            compelling internal.
          </div>
        </div>

        <div className="flex justify-between items-center py-10 gap-3">
          <PartnerComponent
          image={stripeimg}/>

          <PartnerComponent
          image={amazonimg}/>

          <PartnerComponent
          image={airbnbimg}/>

          <PartnerComponent
          image={Paypal}/>
          <PartnerComponent
          image={slackimg}/>
          <PartnerComponent
          image={spotifyimg}/>

          <PartnerComponent 
          image={shopbotimg}/>
          {/* <div>
            <img scr={stripeimg} alt="logo" />
          </div>
          <div>
            <img scr={amazonimg} alt="logo" />
          </div>
          <div>
            <img scr={airbnbimg} alt="logo" />
          </div>
          <div>
            <img scr={Paypal} alt="logo" />
          </div>
          <div>
            <img scr={slackimg} alt="logo" />
          </div>
          <div>
            <img scr={spotifyimg} alt="logo" />
          </div>
          <div>
            <img scr={shopbotimg} alt="logo" />
          </div> */}
        </div>

        <div className="flex item-center justify-between mx-auto w-[60px]">
          <div className="bg-indigo w-3 h-3 rounded-full cursor-pointer"></div>{" "}
          <div className="bg-gray w-3 h-3 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Partners;
