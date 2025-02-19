import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-amber-500 text-teal-800 p-5 flex flex-col md:flex-row justify-evenly mt-28 pt-20">
        <div className="flex flex-col gap-2 mb-6 md:mb-0">
          <h2 className="text-xl text-black font-bold">Company</h2>
          <p className="text-left hover:text-teal-700 cursor-pointer">About Us</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Contact Us</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Our Services</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">FAQ</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-2 mb-6 md:mb-0">
          <h2 className="text-xl text-black font-bold">Resources</h2>
          <p className="text-left hover:text-teal-700 cursor-pointer">Community</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Blog</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Support</p>
        </div>
        <div className="flex flex-col gap-2 mb-6 md:mb-0">
          <h2 className="text-xl text-black font-bold">Links</h2>
          <p className="text-left hover:text-teal-700 cursor-pointer">Cookie Policy</p>
          <p className="text-left hover:text-teal-700 cursor-pointer">Terms and Policy</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-black font-bold">Follow us</h2>
            <div className="flex flex-wrap gap-4">
              <p className="text-2xl hover:text-teal-700 cursor-pointer">
                <FaFacebook />
              </p>
              <p className="text-2xl hover:text-teal-700 cursor-pointer">
                <FaInstagram />
              </p>
              <p className="text-2xl hover:text-teal-700 cursor-pointer">
                <FaXTwitter />
              </p>
              <p className="text-2xl hover:text-teal-700 cursor-pointer">
                <IoLogoGoogleplus />
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your feedback"
              className="p-2 bg-teal-800 text-amber-500 border-0 outline-none rounded-lg w-full md:w-auto"
            />
            <button className="bg-teal-800 text-amber-500 px-4 py-2 rounded-lg text-medium mt-4 md:mt-0">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="border-teal-800" />
      <div className="bg-amber-500 text-teal-800 text-center py-2">
        <span>&#169;2024 Show-Time</span>
      </div>
    </>
  );
};

export default Footer;
