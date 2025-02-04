import React, { useEffect, useState, useRef } from "react";
import home from "../assets/system.jpg";

const Home = () => {
  const text = "HI, I'M RADHIKA LAHRE 🙋‍♀️"; // Full text to type
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference for section visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Check if the section is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (!isVisible) {
      setDisplayText("");
      setIndex(0);
    }
  }, [index, isVisible]);

  return (
    <div
      ref={sectionRef}
      className="flex w-full h-screen/2 flex-col md:flex-row p-8 nd:p-12 items-center justify-center md:mt-[10%] mt-[25%] text-white"
    >
      <div className="md:w-[60%]">
        {/* Typing Effect (Only When Visible) */}
        <h1 className="flex md:text-[80px] text-[40px] font-bold items-center justify-center">
          {displayText}
        </h1>

        <p className="text-large w-auto text-slate-300"></p>

        <div className="flex mt-4 text-white">
          <button className="mr-4 bg-greenColor hover:bg-blueColor p-2 rounded-lg animate-pulse">
            Download CV
          </button>
          <button className="mr-4 bg-greenColor hover:bg-blueColor p-2 rounded-lg animate-pulse">
            Watch the video
          </button>
        </div>
      </div>

      <div className="w-[50%] mt-4 justify-center items-center ml-[104px]">
        <img
          className="hidden md:block md:w-[50%] w-[400px] h-[300px] md:h-[50%] rounded-3xl  transition-transform duration-300 ease-in-out hover:-translate-y-4 "
          src={home}
          alt="Home"
        />
      </div>
    </div>
  );
};

export default Home;
