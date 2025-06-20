import React from "react";
import story from '../Json/Story';
import Button from "./Button";

const Story = () => {
  return (
    <>
      <div className="container flex justify-between  p-20 ps-100">
        <div className="items-start">
          <h1 className=" text-[46px] box-decoration-clone max-w-70">{story.title}</h1>
          <p className='max-w-100 text-justify text-[18px] text-gray-400'>{story.desc}</p>
          <Button className="p-10">{story.button}</Button>
        </div>
        <div><img src={story.img} className="h-[470px] w-[575px]"/></div>
      </div>
    </>
  );
};

export default Story;
