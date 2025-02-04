import React from "react";
import projectImgae1 from "../assets/recipeFinder.png";
import projectImgae2 from "../assets/edtech.jpeg";
import projectImgae3 from "../assets/rubberIndustry.jpeg";
import projectImgae4 from "../assets/codeEditor.png";

import { Project1, Project2, Project3, Project4 } from "../constants/Detail";
// import TechnicalSkill from "./TechnicalSkill";

const Project = () => {
  return (
    <section
      id="projects"
      className="h-auto flex flex-col justify-center items-center bg-[#07374a] text-white "
    >
      {/* <TechnicalSkill /> */}
      {/* <h1 className=" text-[50px] text-white font-bold mx-auto mt-2">
        Projects
      </h1> */}

      {/* card main container */}
      <div className="flex flex-col items-center  md:flex-row ">
        {/* 1st card */}
        <div className="bg-slate-900  flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px] rounded-2xl" src={projectImgae1} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project1.title}</p>
          {/* project Desription: */}
          <p>{Project1.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project1.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
        {/* 2nd card */}
        <div className="bg-slate-900    flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px] rounded-2xl" src={projectImgae2} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project2.title}</p>
          {/* project Desription: */}
          <p>{Project2.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project2.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
        {/* 3rd card */}
        <div className="bg-slate-900    flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px] rounded-2xl" src={projectImgae3} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project3.title}</p>
          {/* project Desription: */}
          <p>{Project3.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project3.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
        {/* 4thrd card */}
        <div className="bg-slate-900   flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px] rounded-2xl" src={projectImgae4} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project4.title}</p>
          {/* project Desription: */}
          <p>{Project4.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project4.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
      </div>

      {/* <h1 className=" text-[60px] text-colorText font-bold mx-auto mt-2">
        Contact Me
      </h1> */}
    </section>
  );
};

export default Project;
