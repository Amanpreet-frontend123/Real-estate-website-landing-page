import React from "react";
import homeImg from "../assets/homeimg2.png";
import Button from "./Button";
import herosection from "../Json/Herosection";

const Herosection = () => {
  return (
    <>
      <div className="container flex justify-between bg-black text-white py-12  ">
        <div className="ms-[120px] font-[500px] mt-[36px]">
          <h1 className="text-[64px] ">{herosection.title1}</h1>
          <h1 className="text-[64px]    ">{herosection.title2}</h1>
          <h1 className="text-[64px]    ">{herosection.title3}</h1>
          <p className="text-[18px] font-[500px] leading-[50px] text-gray-400 max-w-150 ">
            {herosection.description}
          </p>
          <Button>{herosection.herosectionButton}</Button>
          <div className="relative flex gap-20  mt-[90px]">
            <h2 className="text-4xl font-bold ">
              {herosection.Number1}
              <span className="text-blue-400 font-bold">
                {herosection.sign}
              </span>
              <br />
              <span className="font-light text-lg">{herosection.text1}</span>
            </h2>
            <h2 className="text-4xl font-bold">
              {herosection.Number2}
              <span className="text-blue-400 font-bold">
                {herosection.sign}
              </span>
              <br />
              <span className="font-light text-lg">{herosection.text2}</span>
            </h2>
            <h2 className="text-4xl font-bold">
              {herosection.Number3}
              <span className="text-blue-400 font-bold">
                {herosection.sign}
              </span>
              <br />
              <span className="font-light text-lg">{herosection.text3}</span>
            </h2>
          </div>
        </div>

        <div className="">
          <img
            src={homeImg}
            alt=""
            className="w-[298px] md:w-[498px] lg:w-[698px] h-[987px] -mt-50"
          />
          <div className="absolute -mt-29  -ms-12  pt-10 ps-10   gap-10 h-[166px] w-[745px]  bg-linear-to-r from-cyan-500 to-blue-500 flex justify-evenly">
            <div>
              <h2 className="text-[25px] font-[500px] leading-[50px]">{herosection.imgdivdecs1}</h2>
            </div>
            <div>
              <h2 className="text-[30px] font-[600px] leading-[50px]">{herosection.imgdivdecs2}</h2>
            </div>
            <div>
              <p className="text-balance max-w-200">{herosection.imgdivdecs3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
