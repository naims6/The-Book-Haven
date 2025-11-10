import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router";
import logo from "../assets/logo-1.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-base-200 px-10 pb-10 pt-14">
      <div className="footer flex flex-col lg:flex-row justify-between space-y-6 container2 pb-10">
        <aside className="max-w-[320px]">
          <Link to={"/"} className="text-2xl font-bold flex items-center">
            <img className="w-[200px] mb-2" src={logo} alt="image logo" />
          </Link>
          <p>
            A large selection of safe fulfilled toys for both boys and girls.
            <br />
            An ideal playing companion for children of all ages.
          </p>
          {/* social icon */}
          <div className="mt-5 flex gap-3 *:border *:rounded-full *:border-gray-500 *:p-2.5 *:cursor-pointer">
            <span>
              <FaFacebookF size={22} />
            </span>
            <span>
              <FaTwitter size={22} />
            </span>
            <span>
              <FaLinkedin size={22} />
            </span>
            <span>
              <FaInstagram size={22} />
            </span>
          </div>
        </aside>
        {/* contact us */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="text-white font-semibold text-xl">
              Customer Support
            </h6>
            <span className="absolute -bottom-1 left-0 w-28 h-1 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(237,221,83,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className="space-y-4 mt-2.5">
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Store List
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Opening Ours
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Contact Us
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Return Policy
            </a>
          </div>
        </nav>
        {/* my account */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="text-white font-semibold text-xl">My Account</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-1 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(237,221,83,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className="space-y-4 mt-2.5">
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Cart Page
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Check Out
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Compare
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              WishList
            </a>
          </div>
        </nav>
        {/* services */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="text-white font-semibold text-xl">Services</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-1 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(237,221,83,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className="space-y-4 mt-2.5">
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Services Areas
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Toy, Games
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Service Offering
            </a>
            <a className="link link-hover flex text-base gap-1 hover:text-[#02A89E] transition-all duration-200">
              <RiArrowRightDoubleLine size={24} />
              Pricing Table
            </a>
          </div>
        </nav>
        {/* News Later*/}
        <nav className="max-w-[300px]" data-aos="fade-left">
          {/* nav header  */}
          <div className="relative">
            <h6 className="text-white font-semibold text-xl">News Letter</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-1 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(237,221,83,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className=" mt-2.5">
            <p>
              Sign up to searing weekly newsletter to get the latest updates.
            </p>
          </div>
        </nav>
      </div>
      {/* bottom */}
      <div className="border-t border-gray-600 pt-10 mt-7">
        <h1 className="text-center text-sm lg:text-base">
          {" "}
          Copyright 2025 The Book Haven. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
