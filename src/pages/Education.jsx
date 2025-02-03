import React from "react";

import { experience1, experience2, experience3 } from "../constants/Detail";

const Education = () => {
  return (
    <>
      {/* first container */}
      <div className="flex flex-col  md:flex-row  text-white justify-center">
        {/* first experience */}
        <div className="flex flex-col w-auto m-5">
          {/* this paragraph represent duration */}
          <p className="text-greenColor text-[20px] border border-greenColor p-2 w-[40%] ">
            {experience1.duration}
          </p>

          {/* this paragraph represent title */}
          <p className="mt-2 text-[20px] font-bold">
            {experience1.companyName}
          </p>

          {/* this paragraph represent description */}
          <p className="text-[12px] text-slate-400 mb-8">
            {" "}
            {experience1.description}
          </p>
        </div>

        {/* Second experience */}
        <div className="flex flex-col w-auto m-5 ">
          {/* this paragraph represent duration */}
          <p className="text-greenColor text-[20px] border border-greenColor p-2 w-[70%] ">
            {experience2.duration}
          </p>

          {/* this paragraph represent title */}
          <p className="mt-2 text-[20px] font-bold">
            {experience2.companyName}
          </p>

          {/* this paragraph represent description */}
          <p className="text-[12px] text-slate-400">
            {" "}
            {experience2.description}
          </p>
        </div>
      </div>

      {/* Third experience */}
      <div className="flex justify-center flex-col md:w-2/4 ml-5   m-2">
        {/* this paragraph represent duration */}
        <p className="text-greenColor text-[20px] border border-greenColor p-2 w-[60%] ">
          {experience3.duration}
        </p>

        {/* this paragraph represent title */}
        <p className="mt-2 text-[20px] font-bold text-white">
          {experience3.companyName}
        </p>

        {/* this paragraph represent description */}
        <p className="text-[12px] text-slate-400 w-3/4">
          {" "}
          {experience3.description}
        </p>
      </div>
    </>
  );
};

export default Education;
