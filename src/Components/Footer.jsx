import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-700/40 text-base-200 pb-8 pt-12">
      <div className="footer flex flex-col lg:flex-row justify-between space-y-6 container2 pb-10">
        <aside className="max-w-[320px]">
          <Link to={"/"} className="text-2xl font-bold flex items-center">
            <h1 className="text-3xl text-center whitespace-nowrap">
              📚 Book.io
            </h1>
          </Link>
          <p className="mt-4">
            Experience unforgettable journeys with books from every genre and
            era.
            <br />
            Turn every page into a new adventure—start exploring your library
            today.
          </p>
          {/* social icon */}
          <div className="mt-5 flex gap-3 *:border *:rounded-full *:border-gray-500 *:p-2.5 *:cursor-pointer">
            <span>
              <FaFacebookF size={22} />
            </span>
            <span>
              <FaXTwitter size={22} />
            </span>
            <span>
              <FaLinkedin size={22} />
            </span>
            <span>
              <FaInstagram size={22} />
            </span>
          </div>
        </aside>
        {/* Need Help */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="font-semibold text-xl">Need Help</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className="space-y-2.5 mt-5">
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Help Center
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Shipping FAQs
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Pick up in Store
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Order Status
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Product Recalls
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Corrections & Updates
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Gift Cards
            </a>
          </div>
        </nav>
        {/* about us */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="font-semibold text-xl">About Us</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
          </div>

          <div className="space-y-2.5 mt-5">
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Contact Us
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Track Your Order
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Returns Policy
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Brand Directory
            </a>
          </div>
        </nav>
        {/* categories */}
        <nav>
          {/* nav header  */}
          <div className="relative">
            <h6 className="font-semibold text-xl">Categories</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
          </div>

          <div className="space-y-2.5 mt-5">
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Coupons
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              RX Prescription
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Scholarship Program
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Brand Directory
            </a>
            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              E-Catalogs/Requests
            </a>

            <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-[#064532] transition-all duration-200">
              Blog
            </a>
          </div>
        </nav>
        {/* News Later*/}
        <nav className="max-w-[300px]" data-aos="fade-left">
          {/* nav header  */}
          <div className="relative">
            <h6 className="font-semibold text-xl">Categories</h6>
            <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
          </div>
          <div className=" mt-4">
            <p>Sign up for our latest news and offers:</p>
          </div>
          <div className="flex mt-6">
            <input
              type="text"
              className="py-4 px-4 bg-gray-800 rounded-l-md"
              placeholder="Enter Your Email"
            />
            <span className="py-4 px-4 bg-green-700 rounded-r-md">
              <MdOutlineMailOutline color="#fff" size={26} />
            </span>
          </div>
        </nav>
      </div>
      {/* bottom */}
      <div className="border-t border-gray-600/40 pt-8 mt-6">
        <h1 className="text-center text-sm lg:text-base">
          {" "}
          Copyright {currentYear} The Book Haven. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
