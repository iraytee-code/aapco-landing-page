import React, { Fragment } from "react";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const TeamComponent = ({image, name, role}) => {
  return (
    <Fragment>
      <div className=" max-w-sm Team-container">
        <div>
          <img src={image} alt="member-img" className="team_img rounded" />
        </div>
        <div>
          <div className="member-info text-white flex-col justify-center items-center">
            <div className="font-bold text-xl">{name}</div>
            <div className="pt-3 pb-5">{role}</div>
            <div className="flex justify-between items-center w-[50%] mx-auto">
              <div>
                <FaFacebookF  size={20}/>
              </div>{" "}
              <div>
                <TbBrandTwitter size={20}/>
              </div>{" "}
              <div>
                <FaGithubAlt size={20}/>
              </div>{" "}
              <div>
                <BiBasketball size={20}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamComponent;
