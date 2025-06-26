import React from "react";
import story from '../Json/Story';
import Button from "./Button";

const Story = () => {
  return (
    <>
    <div className="container">
      <div className="ms-[180px] flex  sm:ms-[40px]">
        <div className="items-start">
          <h1 className="text-[46px] sm:text-[46px] text-[#242527] font-[600] max-w-70">{story.title}</h1>
          <p className='min-w-170 text-[18px] leading-[40px] sm:max-w-160 sm:text-balance sm:leading-[45px] mt-[5px]  sm:text-[18px] font-[500px] text-[#C4C4C4]'>{story.desc}</p>
          <button className= "cursor-pointer relative h-14 mt-[49px] bg-[#0A72AD] text-white mb-[121px] w-50">{story.button}</button>
        </div>
        <div className="ms-[74px] max-w-[575px] w-full h-[470px] bg-[#9797971F]"><img src={story.img} className="absolute ms-[25px] mt-[25px] sm:ms-[25px] h-[410px] w-[480px] mt-[30px] mb-[121px]"/></div>
      </div>
      </div>
    </>
  );
};

export default Story;
