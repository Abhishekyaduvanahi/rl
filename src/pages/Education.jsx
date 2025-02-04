import React, { useEffect, useState, useRef } from "react";
import { experience1, experience2, experience3 } from "../constants/Detail";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {/* first container */}
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row h-[screen/2] text-white justify-center"
      >
        {/* first experience */}
        <div className="flex flex-col w-auto m-5">
          <p
            className={`text-greenColor text-[20px] border p-2 w-[58%] ${
              isVisible
                ? "animate-border-gradient border-greenColor"
                : "border-greenColor"
            }`}
          >
            {experience1.duration}
          </p>
          <p className="mt-2 text-[20px] font-bold">
            {experience1.companyName}
          </p>
          <p className="text-[12px] text-slate-400 mb-8 transition-all duration-500 hover:scale-125 md:hover:scale-110 hover:p-12 md:hover:p-4">
            {experience1.description}
          </p>
        </div>

        {/* Second experience */}
        <div className="flex flex-col w-auto m-5">
          <p
            className={`text-greenColor text-[20px] border p-2 w-[70%] ${
              isVisible
                ? "animate-border-gradient border-greenColor"
                : "border-greenColor"
            }`}
          >
            {experience2.duration}
          </p>
          <p className="mt-2 text-[20px] font-bold ">
            {experience2.companyName}
          </p>
          <p className="text-[12px] text-slate-400 transition-all duration-500 hover:scale-125 md:hover:scale-110 hover:p-12 md:hover:p-4">
            {experience2.description}
          </p>
        </div>
      </div>

      {/* Third experience */}
      <div className="flex justify-center flex-col md:w-2/4 ml-5 m-2">
        <p
          className={`text-greenColor text-[20px] border p-2 w-[60%] ${
            isVisible
              ? "animate-border-gradient border-greenColor"
              : "border-greenColor"
          }`}
        >
          {experience3.duration}
        </p>
        <p className="mt-2 text-[20px] font-bold text-white">
          {experience3.companyName}
        </p>
        <p className="text-[12px] text-slate-400 w-3/4 transition-all duration-500 hover:scale-125 md:hover:scale-110 hover:p-12 md:hover:p-4">
          {experience3.description}
        </p>
      </div>



      
    </>
  );
};

export default Education;
