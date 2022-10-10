import React, { Fragment } from "react";
import logo from "../../Assets/images/logo-white.png";
import FooterComponent from "../Utilities/FooterComponent";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BsPhone } from "react-icons/bs";
import { TiMail } from "react-icons/ti";
import { BsGlobe } from "react-icons/bs";
import imgwave from "../../Assets/images/footer-top-shape.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="app_footer relative">
        <div className=" wave-img">
          <img src={imgwave} alt="" />
        </div>
        <div className=" pb-10 text-center bg-tr footer_form">
          <div className="w-[70%]">
            {" "}
            <input className="absolute rounded-full w-[350px] border-2 text-lightGrey px-2 py-4 lg:w-[470px] lg:px-2 lg:py-5"></input>
            <div className="relative top-3 left-60 lg:left-80  lg:ml-40 text-white">
              <button className="rounded-full bg-blue px-5 py-3 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-6 lg:px-36">
          <div>
            <img
              className="w-[7rem] cursor-pointer pt-10 pb-5"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="text-white leading-7">
            Holisticly empower premium architectures without value-added ideas.
            Seamlessly evolve cross-platform experiences.
          </div>
          <div className="flex w-[150px] justify-between py-10">
            <div className="text-lightGrey hover:text-white">
              <FaFacebookF size="20" />
            </div>
            <div className="text-lightGrey hover:text-white">
              <FiTwitter size="20" />
            </div>
            <div className="text-lightGrey hover:text-white">
              <FaInstagram size="20" />
            </div>
            <div className="text-lightGrey hover:text-white">
              <FaPinterestP size="20" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-2 md:px-6 lg:px-36">
          <FooterComponent
            Title="Resources"
            item1="Help"
            item2="Event"
            item3="Live Support"
            item4="Open Sources"
            item5="Documentation"
          />

          <FooterComponent
            Title="Company"
            item1="About Us"
            item2="Careers"
            item3="Customers"
            item4="Community"
            item5="Our Team"
          />

          <FooterComponent
            Title="Location"
            item1={
              <div className="flex items-center text-white">
                {" "}
                <div>
                  <GrLocation color="white" />
                </div>{" "}
                <div className="pl-2">
                  121 King Melbourne <br /> Australia 3000
                </div>
              </div>
            }
            item2={
              <div className="flex items-center">
                {" "}
                <div>
                  <BsPhone />{" "}
                </div>{" "}
                <div className="pl-2">+61 2 8376 6284</div>
              </div>
            }
            item3={
              <div className="flex items-center">
                {" "}
                <div>
                  <TiMail />{" "}
                </div>{" "}
                <div className="pl-2">mail@example.com</div>
              </div>
            }
            item4={
              <div className="flex items-center">
                {" "}
                <div>
                  <BsGlobe />{" "}
                </div>{" "}
                <div className="pl-2">www.yourdamain.com</div>
              </div>
            }
          />
        </div>
        <div className=" md:flex justify-between items-center text-lightGrey text-sm px-2 md:px-6 lg:px-36 py-10">
          <div>© ThemeTags Design Agency, All rights reserved</div>
          <div className="flex">
            <div><div className="pr-3">Terms</div></div> <div>Security</div> <div className="px-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
