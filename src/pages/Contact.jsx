import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links, about } from "../constants/Detail";

const Contact = () => {
  return (
    <>
      {/* the main Container */}
      <div className="flex text-white md:flex-row flex-col">
        {/* for the left portion */}
        <div className="flex flex-col justify-center items-center md:w-[50%]">
          <p className="text-[40px] font-bold mb-2">Contact Me</p>
          <div className="flex mb-8 space-x-4">
            <a href={Links.linkdin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className=" hover:text-blue-700" />
            </a>
            <a href={Links.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} className="hover:text-gray-700" />
            </a>
            <a href={Links.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} className="hover:text-blue-500" />
            </a>
            <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={25} className=" hover:text-pink-500" />
            </a>
          </div>
        </div>

        {/* for the right person */}
        <div className="md:w-[50%] flex flex-col justify-center items-center bg-blueColor mb-4 m-4 rounded-3xl">
          <p className="text-[30px]">GET TOUCH ME ?</p>
          <input
            type="text"
            placeholder="YOUR NAME"
            className="w-3/4 rounded-3xl p-2 mb-4"
          />
          <input
            type="text"
            placeholder="YOUR EMAIL"
            className="w-3/4 rounded-3xl p-2 mb-4"
          />
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="w-3/4 rounded-3xl p-2 mb-4"
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
