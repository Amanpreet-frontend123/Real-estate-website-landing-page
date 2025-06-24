import React from "react";
import story from '../Json/Story';
import Button from "./Button";

const Story = () => {
  return (
    <>
      <div className="container flex  ms-[120px]">
        <div className="items-start">
          <h1 className=" text-[46px] text-[#242527] font-[600px] max-w-70">{story.title}</h1>
          <p className='max-w-160 text-balance leading-[45px] mt-[5px]  text-[18px] font-[500px] text-[#C4C4C4]'>{story.desc}</p>
          <button className= "cursor-pointer relative h-14 mt-[49px] bg-[#0A72AD] text-white mb-[121px] w-50">{story.button}</button>
        </div>
        <div className="ms-[74px] w-[575px] h-[470px] bg-[#9797971F]"><img src={story.img} className="absolute mt-[25px] ms-[25px] h-[410px] w-[520px] mt-[30px] mb-[121px]"/></div>
      </div>
    </>
  );
};

export default Story;
