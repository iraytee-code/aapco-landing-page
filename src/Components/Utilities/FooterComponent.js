import React, { Fragment } from "react";

const FooterComponent = ({ Title, item1, item2, item3, item4, item5 }) => {
  return (
    <Fragment>
      <div className="flex-cols justify-center items-center">
        <div className="text-white text-lg lg:text-xl font-bold">{Title}</div>
        <div>
          <div className="text-lightGrey cursor-pointer hover:text-white pb-4 pt-2">
            {item1}
          </div>
          <div className="text-lightGrey cursor-pointer hover:text-white pb-4 pt-2">
            {item2}
          </div>
          <div className="text-lightGrey cursor-pointer hover:text-white pb-4 pt-2">
            {item3}
          </div>
          <div className="text-lightGrey cursor-pointer hover:text-white pb-4 pt-2">
            {item4}
          </div>
          <div className="text-lightGrey cursor-pointer hover:text-white pb-4 pt-2">
            {item5}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterComponent;
