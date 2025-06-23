import React from "react";
import story from '../Json/Story';
import Button from "./Button";

const Story = () => {
  return (
    <>
      <div className="container flex  ms-[120px]">
        <div className="items-start">
          <h1 className=" text-[46px]  max-w-70">{story.title}</h1>
          <p className='max-w-100 text-justify leading-[30px] mt-[25px] text-[18px] text-gray-400'>{story.desc}</p>
          <button className= "h-14 mt-[49px] bg-linear-to-r from-cyan-500 to-blue-500 text-white mb-[121px] w-50">{story.button}</button>
        </div>
        <div><img src={story.img} className="h-[470px] w-[575px] ms-[74px] mb-[121px]"/></div>
      </div>
    </>
  );
};

export default Story;
