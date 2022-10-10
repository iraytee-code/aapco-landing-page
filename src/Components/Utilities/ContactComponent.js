import React, { Fragment } from "react";
const ContactComponent = ({ placeholder }) => {
  return (
    <Fragment>
      <div className="mb-5">
        <input
          className="input border-2 px-5 py-5 text-gray bg-white rounded-lg w-[100%] md:w-[97%] "
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
};

export default ContactComponent;
