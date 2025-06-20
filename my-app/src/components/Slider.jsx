import React from "react";
import slider from "../Json/Slider";

const Slider = () => {
  return (
    <>
      <div className=" flex bg-black w-[1064px] h-[566px] ]">
        <div>
          <img src={slider.img} />
          <div className="absolute w-[263px] h-[171px] bg-white">
            <h1>{slider.divHeading}</h1>
            <p>{slider.divDesc}</p>
            <img src={slider.vector} className="absolute" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Slider;
