import React from "react";

import home from "../assets/system.jpg";

const Home = () => {
  return (
    <>
      {/* <h1 className="h-[screen/2] flex   text-3xl font-bold">🏠 Home Page</h1> */}

      {/* className="min-h-screen flex items-center justify-center text-3xl font-bold" */}
      {/* 
      // this is the main container  */}
      <div className=" flex w-full  flex-col md:flex-row p-2  items-center justify-center md:mt-[10%] mt-[25%] text-white">
        {/* //this is for text */}
        <div className="md:w-[60%] ">
          {/* heading */}
          <h1 className=" flex md:text-[80px] text-[40px] font-bold items-center justify-center ">
            HI, I'M RADHIKA LAHRE
          </h1>

          {/* paragrah */}
          <p className="text-large w-auto text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta
            quam. Nobis, perspiciatis maiores alias ex eaque voluptates fugiat
            nesciunt hic dolores ipsam aliquam eligendi asperiores eveniet,
            dolorem ipsa laborum. Quas soluta fuga doloremque ratione expedita!
            Sed dignissimos deleniti vel quis eos molestiae autem molestias.
          </p>

          {/* this div for download cv and contact button */}
          <div className="flex mt-4 text-white">
            <button className="mr-4 bg-greenColor hover:bg-blueColor p-2 rounded-lg">
              Dowload CV
            </button>
            <button className="mr-4 bg-greenColor hover:bg-blueColor p-2 rounded-lg">
              Watch the video
            </button>
          </div>
        </div>

        {/* this div is for image  */}
        <div className="w-[50%] mt-4 justify-center items-center ml-[104px]">
          {/* <img
            className=" hidden md:visible md:w-[50%] w-[400px] h-[300px] md:h-[50%] rounded-3xl"
            src={home}
            alt=""
          /> */}
          <img
            className="hidden md:block md:w-[50%] w-[400px] h-[300px] md:h-[50%] rounded-3xl"
            src={home}
            alt="Home"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
