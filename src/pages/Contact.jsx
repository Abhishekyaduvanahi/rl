import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links, about } from "../constants/Detail";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* the main Container */}
      <div className="flex text-white md:flex-row flex-col h-screen mt-4">
        {/* for the left portion */}
        <div className="flex flex-col justify-center items-center md:w-[50%]">
          <p className="text-[40px] font-bold mb-4 animate-bounce transition-transform duration-300 scale-110 ">
            Contact Me
          </p>
          <div className="flex mb-2 space-x-4">
            <a href={Links.linkdin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={25}
                className=" animate-bounce hover:text-blue-700"
              />
            </a>
            <a href={Links.github} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={25}
                className=" animate-pulse hover:text-gray-700"
              />
            </a>
            <a href={Links.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter
                size={25}
                className=" animate-pulse hover:text-blue-500"
              />
            </a>
            <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare
                size={25}
                className=" animate-bounce hover:text-pink-500"
              />
            </a>
          </div>
        </div>

        {/* for the right person */}
        <div className="md:w-[50%] flex flex-col justify-center items-center bg-blueColor mb-[20px] m-4 rounded-3xl">
          <p className="text-[30px] mb-[40px] transition-transform duration-300 ease-in-out animate-bounce mt-8 ">
            GET TOUCH ME ?
          </p>
          <input
            type="text"
            placeholder="YOUR NAME"
            className="w-3/4 rounded-3xl p-2 mb-[40px]"
          />
          <input
            type="text"
            placeholder="YOUR EMAIL"
            className="w-3/4 rounded-3xl p-2 mb-[40px]"
          />
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="w-3/4 rounded-3xl p-2 mb-[40px]"
          />
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            className="w-3/4  h-auto rounded-lg p-2 text-black mb-8"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Contact;
