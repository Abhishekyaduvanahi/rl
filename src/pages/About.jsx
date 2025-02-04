// import React from 'react'

// const About = () => {
//   return (
//     <>
//       <h1 className="min-h-screen flex items-center justify-center text-3xl font-bold">
//       📖 About Me
//       </h1>
//     </>
//   )
// }

// export default About
import React from "react";
// import Education from "./Education";
// import TechnicalSkill from "./TechnicalSkill";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links, about } from "../constants/Detail";
import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto mb-8 w-full flex flex-col justify-center items-center  text-slate-300 bg-black"
    >
      {/* className="min-h-screen flex items-center justify-center text-3xl font-bold" */}

      {/* <h1 className="text-[45px] md:text-[60px] font-serif  mx-auto mt-4 text-greenColor">
        About Me
      </h1> */}

      {/* Increase the size of the icon */}
      {/* <CgProfile size={200} className=" mt-8" /> */}
      <p className="p-2 md:w-[60%] text-[30px] text-white font-serif font-bold flext justify-center items-center">
        Transforming visions into exceptional portfolios.
      </p>
      <p className="p-2 md:w-[70%] ">{about.detail}</p>

      {/* Uncomment if needed */}
      {/* <TechnicalSkill /> */}
      {/* <Education /> */}

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
    </section>
  );
};

export default About;
