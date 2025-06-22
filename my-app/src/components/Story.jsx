import React from "react";
import story from '../Json/Story';
import Button from "./Button";

const Story = () => {
  return (
    <>
      <div className="container flex  pb-[121px] ps-[120px]">
        <div className="items-start">
          <h1 className=" text-[46px] box-decoration-clone max-w-70">{story.title}</h1>
          <p className='max-w-100 text-justify mt-[24px] text-[18px] text-gray-400 leading-[40px]'>{story.desc}</p>
          <button className="h-14 mt-[49px] bg-linear-to-r from-cyan-500 to-blue-500 text-white  w-50">{story.button}</button>
        </div>
        <div><img src={story.img} className="h-[470px] w-[575px] ms-[74px]"/></div>
      </div>
    </>
  );
};

export default Story;
