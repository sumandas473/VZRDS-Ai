import React from "react";
import heroimage from "../../assets/heroImage.jpg";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="flex flex-col items-center pt-14 h-screen">
      <motion.h1
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ ease: "linear", duration: 1.5 }}
        data-scroll
        data-scroll-section
        data-scroll-speed="0.1"
        className="uppercase text-transparent text-[14rem] font-zenKaku leading-tight font-thin bg-clip-text bg-gradient-to-b from-[#fff] to-[#343434]"
      >
        Ai wizards
      </motion.h1>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.9"
        className="h-[60%] w-[97%] bg-slate-500 absolute bottom-10 rounded-[80px] overflow-hidden "
      >
        <input
          placeholder=" try your command here..."
          type="text"
          className="h-20 w-[55%] border absolute top-32 left-80 backdrop-blur-2xl rounded-3xl bg-[#ffffff50] flex items-center justify-center outline-none px-10 placeholder-black capitalize"
        />
        {/* <div className="h-20 w-[55%] border absolute top-32 left-80 backdrop-blur-2xl rounded-3xl bg-[#ffffff50] flex items-center justify-center">
          <h1 className="font-zenKaku text-xl capitalize text-[#464646]">
            try your command here...
          </h1>
        </div> */}

        <img
          src={heroimage}
          alt=""
          className="h-full w-full object-cover object-[50%16%] "
        />
      </div>
      <div className="h-20 w-[80%] border backdrop-blur-2xl rounded-[70px] bg-[#ffffff0f] absolute bottom-[-1%] flex items-center justify-center ">
        <div className="h-[80%] w-[18%] bg-[#000000a6] rounded-[70px] flex items-center justify-center text-white hover:bg-white hover:text-black duration-200 select-none cursor-pointer">
          <h1 className=" font-zenKaku  text-xl  ">Research</h1>
        </div>
        <div
          className="h-[80%] w-[15%] bg-[#000000a6] rounded-[70px] flex items-center justify-center text-white hover:bg-white hover:text-black duration-200 select-none cursor-pointer"
          onClick={() => alert("Currently Website On the way")}
        >
          <h1
            className=" font-zenKaku text-xl "
            onClick={() => alert("Currently Website On the way")}
          >
            API
          </h1>
        </div>
        <div className="h-[80%] w-[15%] bg-[#000000a6] rounded-[70px] flex items-center justify-center text-white hover:bg-white hover:text-black duration-200 select-none cursor-pointer">
          <h1 className=" font-zenKaku  text-xl ">About</h1>
        </div>
        <div className="h-[80%] w-[15%] bg-[#000000a6] rounded-[70px] flex items-center justify-center text-white hover:bg-white hover:text-black duration-200 select-none cursor-pointer">
          <h1 className=" font-zenKaku text-xl ">Company</h1>
        </div>
        <div className="h-[80%] w-[15%] bg-[#000000a6] rounded-[70px] flex items-center justify-center text-white hover:bg-white hover:text-black duration-200 select-none cursor-pointer">
          <h1 className=" font-zenKaku  text-xl ">Collabs</h1>
        </div>
        <div className="h-[80%] w-[20%] bg-[#a0de36] rounded-[70px] flex items-center justify-center select-none cursor-pointer">
          <h1 className=" font-zenKaku text-black text-xl ">Try This One</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
