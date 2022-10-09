import React from "react";

const AccordionComponent = ({ title, description, image }) => {
  return (
    <div className="py-5  text-gray bg-white mb-10 rounded-lg">
      <div className="flex  items-center justify-between px-4 py-2">
        {" "}
        <div className="flex items-center">
          <span className="pr-4">
            <img src={image} alt="wallet img" />
          </span>
          {title}
        </div>{" "}
        <div className="text-lg text-indigo">+</div>
      </div>
      <div className=" py-3 border-t-2 px-4 leading-7 hidden">
        {description}
      </div>
    </div>
  );
};

export default AccordionComponent;
