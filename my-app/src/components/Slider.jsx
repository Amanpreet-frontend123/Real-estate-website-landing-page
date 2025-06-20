import React from "react";
import slider from "../Json/Slider";

const Slider = () => {
  return (
    <>
      <div className=" flex bg-black w-[1064px] h-[566px] absolute -mt-180 ms-50">
        <img src={slider.img} className="w-[269px] h-[344px] m-20" />
        <div className="absolute mt-80 ms-65">
          <div className="absolute w-[263px] h-[171px] bg-white">
            <h1>{slider.divHeading}</h1>
            <p>{slider.divDesc}</p>
            <img src={slider.vector} className="absolute -mt-20 ms-20" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Slider;
