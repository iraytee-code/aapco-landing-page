import React, { Fragment } from "react";
import { ContactComponent } from "../../Components";

const Contact = () => {
  return (
    <Fragment>
      <div className=" md:flex items-start justify-between gap-5 px-2 md:px-6 lg:px-36 bg-lightGrey py-10 md:py-20">
        {/* <div> // */}
        <div className="basis-3/6 leading:basis-2/5 pr-3">
          <div className="text-2xl lg:text-3xl font-bold pb-5">
            Contact With Us
          </div>
          <div className="leading-7 text-gray pb-5">
            It's very easy to get in touch with us. Just use the contact form or
            pay us a visit for a coffee at the office. Dynamically innovate
            competitive technology after an expanded array of leadership.
          </div>
          <div className="leading-7 text-gray pb-5">
            <div>Head Office</div>
            <div>121 King St, Melbourne VIC 3000, Australia</div>
          </div>
          <div className="leading-7 text-gray pb-5">
            <div>Phone: +61 2 8376 6284</div>
            <div>Email : hello@yourdomain.com</div>
          </div>
        </div>

        <div className=" basis-3/6 lg:basis-3/5">
          <div className="font-bold text-lg pb-10">Reach us quickly</div>
          <div>
            <div className="sm:grid grid-cols-2 gap-4">
              <ContactComponent placeholder="goat" />
              <ContactComponent placeholder="goat" />
              <ContactComponent placeholder="goat" />
              <ContactComponent placeholder="goat" />
            </div>
            <div className="">
              <textarea className=" focus:border-indigo text-gray border-2 w-[100%] h-[150px] lg:h-[200px] rounded mb-7" />
            </div>
            <div className="mb-7">
              <button className="bg-indigo w-[170px] h-[56px] rounded-full font-bold text-white opacity-60 hover:opacity-100">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
